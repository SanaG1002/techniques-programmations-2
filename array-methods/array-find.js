//array find: 
const  price= [157, 225, 38, 74];
const found = price.find(myPrice);

function myPrice(price){
    return price > 200
}
console.log(found);
//return: 225