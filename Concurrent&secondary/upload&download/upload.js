import SparkMD5 from 'spark-md5'

/*
    0、对File切割
    1、File转为 ArrayBuffer
    2、SparkMD5获取文件md5
*/
export const calcFileMD5 = (file) => {
  return new Promise((resolve, reject) => {
    let chunkSize = 2097152, // 2M
      chunks = Math.ceil(file.size / chunkSize),
      currentChunk = 0,
      spark = new SparkMD5.ArrayBuffer(),
      fileReader = new FileReader()

    fileReader.onload = (e) => {
      console.log(e.target.result)

      spark.append(e.target.result)
      currentChunk++
      if (currentChunk < chunks) {
        loadNext()
      } else {
        resolve(spark.end())
      }
    }

    fileReader.onerror = (e) => {
      reject(fileReader.error)
      fileReader.abort()
    }

    function loadNext() {
      let start = currentChunk * chunkSize,
        end = start + chunkSize >= file.size ? file.size : start + chunkSize
      fileReader.readAsArrayBuffer(file.slice(start, end))
    }
    loadNext()
  })
}

//并发请求
const asyncPool = async (poolLimit, array, iteratorFn) => {
  const ret = [] // 存储所有的异步任务
  const executing = [] // 存储正在执行的异步任务
  for (const item of array) {
    // 调用iteratorFn函数创建异步任务
    const p = Promise.resolve().then(() => iteratorFn(item, array))
    ret.push(p) // 保存新的异步任务

    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1))
      executing.push(e) // 保存正在执行的异步任务
      if (executing.length >= poolLimit) {
        await Promise.race(executing) // 等待较快的任务执行完成
      }
    }
  }
  return Promise.all(ret)
}

/*
    对File分割 变为Blob
    Blob转为formData
*/
export const upload = ({
  url,
  file,
  fileMd5,
  fileSize,
  chunkSize,
  chunkIds,
  poolLimit = 1
}) => {
  const chunks =
    typeof chunkSize === 'number' ? Math.ceil(fileSize / chunkSize) : 1
  return asyncPool(poolLimit, [...new Array(chunks).keys()], (i) => {
    if (chunkIds.indexOf(i + '') !== -1) {
      // 已上传的分块直接跳过
      return Promise.resolve()
    }
    let start = i * chunkSize
    let end = i + 1 == chunks ? fileSize : (i + 1) * chunkSize
    const chunk = file.slice(start, end) // 对文件进行切割
    return uploadChunk({
      url,
      chunk,
      chunkIndex: i,
      fileMd5,
      fileName: file.name
    })
  })
}

function uploadChunk({ url, chunk, chunkIndex, fileMd5, fileName }) {
  let formData = new FormData()
  formData.set('file', chunk, fileMd5 + '-' + chunkIndex)
  formData.set('name', fileName)
  // formData.set("timestamp", Date.now());
  // return request.post(url, formData);
}
