// var num1 = 5, num2 =3;
// var result = num1 > num2 ? num1 >= 100 ? true: false;
// alert(result);



// function name(num, num1, num2, num3, num4, num5){
// 	var result = num+num1+num2+num3;
// 	return result;
// }
// var result = name(10, 5, 30, 5);
// alert(result*name(10, 5, 30, 5));//2500



var string1 = "apple", string2 = "beetroot", string3 = "ham", string4 = "onion", string5 = "orange";
var arr = [string1, string2, string3, string4, string5];
var arr1 = [];
function replace(string){
	var result = "";
	for (var i = string.length - 1; i >= 0; i--) {
	 	result+=string[i];
	 }
return result;
}
for(var i =0; i<arr.length; i++){
	arr1.push(replace(arr[i]));
}
alert(arr);
alert(arr1);