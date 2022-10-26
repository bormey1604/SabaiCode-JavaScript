function value(...args) //rest
{
    return args;
}
console.log(value(1,2,3,4));

function value(num1,nuum2) //rest
{
    return [num1,num2];
}
console.log(value(1,2));