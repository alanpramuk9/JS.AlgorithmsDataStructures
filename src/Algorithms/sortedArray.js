//1.
function getIndexToIns(arr, num) {
    let it = num;
    let sorted = arr.sort();
    let newIndex = sorted.findIndex(myFunction);
    function myFunction(value, index, array) {
        return value > it;
    }
    return newIndex;
  }
  //console.log(getIndexToIns([10, 30, 20, 50, 40], 35)); //3


//2. 
function getIndexToIns2(arr, num) {
// Find my place in this sorted array.
let sorted = arr.sort();
let arrIndex = sorted.filter(function(val){
    return val < num;
})
return arrIndex.length;
}
console.log(getIndexToIns2([10, 30, 20, 50, 40], 35)); //3

//3.
function getIndexToIns3(arr, num) {
// Find my place in this sorted array.
var times = arr.length; // runs the for loop once for each thing in the array
var count = 0; 
for (var i=0;i<times;i++){
    if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num
    return count; // the above equals num's position in a sorted array
}

console.log(getIndexToIns3([40, 60], 50)); // 1