const myNums = [1,2,3,4,5,6,7,8,9,10]
// let newNums = myNums.filter( (num)=> num> 5 )
// console.log(newNums)

// Using forEach

const newNums = []

myNums.forEach( (num) => {
    if(num>5){
        newNums.push(num)
    }
} )

console.log(newNums)