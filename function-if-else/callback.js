//callback is a function which is passed as an argument to another function

// Inshort : function inside a function

function greet(name, callback){
    console.log("Hey"+ name);
    callback();
}
function saybye(){
    console.log("GoodBye");
}

greet(" snehaa", saybye);

