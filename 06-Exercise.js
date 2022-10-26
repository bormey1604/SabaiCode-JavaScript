const arrBetween=(num1,num2,arr)=>{
    return arr.filter((value)=>{
        return value>num1 && value<num2;
    })
}
console.log(arrBetween(1,6,[-1,2,4,5,7]));