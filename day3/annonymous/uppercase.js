let str = "Hello I am a string.";
(function (s){
	let arr = s.split(" ");
	let str = "";
	for (let i in arr){
		str += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
	}
	console.log(str.trim());
})(str)