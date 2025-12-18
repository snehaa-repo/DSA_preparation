// Function callback another function with operators 
// Here anotherfunction is a callback function;

function callinganother(a,b,anotherfunction){
    return anotherfunction(a,b);
}
function add(x,y){
    return x+y;
}
function mul(d,e){
    return d*e;
}

console.log(callinganother(12,13,add));

console.log(callinganother(2,3,mul));

