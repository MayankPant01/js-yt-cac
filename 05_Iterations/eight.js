//reduce 
const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,curVal) {
//     console.log(`acc: ${acc} and curVal: ${curVal}`)
//     return acc + curVal
// }, 0 )

const myTotal = myNums.reduce((acc, currVal) => acc+currVal,0)

console.log(myTotal)
                         
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "python course",
        price: 999
    },

    {
        itemName: "app dev course",
        price: 5999
    },

    {
        itemName: "data science course",
        price: 12999
    }
]

const myCart = shoppingCart.reduce((acc,item)=> (acc+item.price),0)
console.log(myCart)