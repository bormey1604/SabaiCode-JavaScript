const getEvens= (arr)=>{
    return arr.filter((value,index)=>{
          return value%2===0 && index%2===0;
    })
}
console.log(getEvens([4,5,7,8,10,23]));