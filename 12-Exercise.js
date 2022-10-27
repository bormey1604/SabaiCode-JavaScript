const formatTel= (arr)=> {
    let first= `(${arr.slice(0,3).join("")})`
    let second= arr.slice(3,6).join("");
    let third= arr.slice(6).join("");
    return `${first} ${second}-${third}`;
}
console.log(formatTel([1,2,3,4,5,6,7,8,,9,0]))