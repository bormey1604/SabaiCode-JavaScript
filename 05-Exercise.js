const fiftyThirtyTwenty=((incomes)=>{
    return {
        needs:incomes*0.5,
        wants:incomes*0.3,
        savings:incomes*0.2
    }
})
console.log(fiftyThirtyTwenty(10000));
console.log(fiftyThirtyTwenty(500000));