const filters=(arr)=>{
    return arr.filter((value)=>{
          return typeof value=== "number";
    })
}

console.log(filters([1,2,"a",3,"b","5",3]));