let num = "493193"
let bigNum = num

let sum;

while (num.length > 1) {
    sum = 0;
    for (let index = 0; index < num.length; index++) {
        sum += +(num[index]);
    }
    num = sum.toString()
    
}

console.log("The Digital Root of", bigNum, "is :", num)
