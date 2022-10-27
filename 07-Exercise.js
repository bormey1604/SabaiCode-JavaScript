const x = (arr) =>{
    let newArr=arr.map((value)=>{
        return value*1;
    })
    return newArr;
}
console.log(x(["3.2","7.5"]));