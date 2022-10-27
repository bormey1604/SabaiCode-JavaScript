const arrayOparetion=(x,y,n)=>{
    const newArr=[];
    for (let i=x;i<=y;i++)
    {
          if(i%n===0)
          newArr.push(i);
    }
    return newArr;
}
console.log(arrayOparetion(1,10,3));
console.log(arrayOparetion(7,9,2));