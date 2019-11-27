onmessage = function(e) {
  console.log('接收到主線程任務');
  postMessage(fibonacci(e.data));
  console.log('Workers回傳結果給主線程');
  close()
}
function fibonacci(n){
  return n <2? n : arguments.callee(n -1) + arguments.callee(n -2);
}