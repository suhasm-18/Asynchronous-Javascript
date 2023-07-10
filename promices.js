//Resolve 01
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let is_shope_open = true;

 let order=(time,work) =>{
    return new Promise ((resolve,reject)=>{
    if(is_shope_open){
        setTimeout(()=>{
            resolve(work())
        },time);
    }
    else{
        reject(console.log("our shope is closed"));
    }
    })
 }
 order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))