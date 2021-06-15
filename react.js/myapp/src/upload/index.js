import React from 'react';
import { Upload, message, Button, Icon } from 'antd';

import http from "../server/http"

// Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络
var worker = new Worker('/work.js');
    
// 主线程调用worker.postMessage()方法，向 Worker 发消息。
worker.postMessage({cmd: 'start', msg: '666'})
// 主线程通过worker.onmessage指定监听函数，接收子线程发回来的消息
worker.onmessage = function (event) {
    console.log('Received message ' + event.data);
    // worker.terminate(); // Worker 完成任务以后，主线程就可以把它关掉。
}

// 主线程可以监听 Worker 是否发生错误。如果发生错误，Worker 会触发主线程的error事件。
    worker.onerror = function (e) {
        console.log([
            'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
        ].join(''));
    };
    // 或者
    worker.addEventListener('error', function (e) {
    // ...
    });


const props = {
  onChange(info) {
      const formData = new FormData()
    //   formData.append('file', info.file.slice(0, 500))
      formData.append('file[]', info.file.slice(0, 500))
      formData.append('file[]', info.file.slice(501, 1000))
      formData.append('type', '文件上传')
      console.log(111, info.file,  info.file.slice(0, 500), formData)

      
      http('', '/upload', formData, 'post', false, 0, { headers: { 'Content-Type': "multipart/form-data;"} } )

      
        // var fr = new FileReader();
        // fr.onloadend = function(e) {
        //     console.log(333, e.target.result, fr.result)
        // };
        // fr.readAsArrayBuffer(info.file)
  },
  beforeUpload(file){
    return false
  },
  onRemove(file){
    console.log(222, file)
  },
  showUploadList: true,
  accept:'.png',
  action: '',
};

const mm = ()=>{

    return (
        <Upload {...props}>
            <Button>
            <Icon type="upload" /> Click to Upload
            </Button>
        </Upload>
    )
}
export default mm

