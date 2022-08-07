let arr =[4, 6, 9, "Hello", 8, "a", "0", "b"]
let val = prompt("Give me the value you want to search.")

if (arr.indexOf(+(val)) != -1 || arr.indexOf(val) != -1 ) {
    console.log(val, "Is in the array.");
} else {
    console.log(val, "is not in the array.");
}