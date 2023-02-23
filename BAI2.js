var arr = [1, 2, 3, 4, 5, 6, 7];
var arr1 = [];
var arr2 = [];
// arr.forEach((item => {
//     // arr1.push(arr[item]);
//     // arr2.push(arr1.pop())
//     arr1.push(arr.pop());
//
// }))
for (var i = arr.length; i > 0; i--) {
    arr1.push(arr.pop());
}
console.log(arr1);
