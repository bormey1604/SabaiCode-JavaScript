const minMax=(arr) =>{
    const min=Math.min(...arr);
    const max=Math.max(...arr);
    
    return [min,max]
}
console.log(minMax([1,2,3,4,5,6]));
console.log(minMax([45,23,70,12,99]));