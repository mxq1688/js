// arrayBuffer合并
function concatenate(arrays) {
  let totalLen = 0;
  for (let arr of arrays) totalLen += arr.byteLength;
  let res = new Uint8Array(totalLen);
  let offset = 0;
  for (let arr of arrays) {
    let uint8Arr = new Uint8Array(arr);
    res.set(uint8Arr, offset);
    offset += arr.byteLength;
  }
  return res.buffer;
}
