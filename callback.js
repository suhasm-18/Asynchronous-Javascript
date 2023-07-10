function one(call_two){
    console.log("step one");
    call_two();
}

function Two(){
    console.log("step two");
}

one(Two);