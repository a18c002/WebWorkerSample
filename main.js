var vm = new Vue({
	el: "#app",
	data: {
		time: 0,
		value: 0,
		output: '',
		value1: 0,
		output1: ''
	},
	mounted(){
		this.starTime()
	},
	methods:{
		starTime(){
			var self = this
			setInterval(function(){
				self.time ++;
			},1000)
		},
		workersCount(){
			var self = this
			if (window.Worker) {
				const myWorker = new Worker("worker.js");
				myWorker.postMessage(this.value);
				myWorker.onmessage = function(e) {
					self.output = e.data;
					self.value = 0
					console.log('接收到Worer回傳結果');
				}
			} else {
				alert('此瀏覽器不支援 web workers')
			}
		},
		mainCount(){
			this.output1 = this.fibonacci(this.value1)
			this.value1 = 0
		},
		fibonacci(n){
			return n <2? n : arguments.callee(n -1) + arguments.callee(n -2);
		}
	}
	
})
