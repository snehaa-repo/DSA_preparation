//Simple Login Validation 

function login(user,password){
    if(!user || !password)
        return "Missing Crediantials";
    else 
        return "Login Successful";
}

console.log(login("snehal","12345"));
console.log(login("","12345"));
console.log(login());

//only login()--> getting output but not on screen 
