let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

  let is_shop_open = true;

let toppings_choice = () =>{
    return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve(console.log("which topping do you love"));
    },3000);
    });
};

async function Kicthen(){
    console.log("a");
    console.log("b");
    console.log("c");

    await toppings_choice();
    console.log("d");
    console.log("e");
}

Kicthen();

console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")