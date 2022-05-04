
//array some:
const fruits = ["pomme", "banane", "fraise", "poire", "kiwi"];
const even = fruits.some(checkFruits);

function checkFruits(fruits){
    return fruits = "kiwi";
}
console.log(even);
//return: true



//array every:
const fruits = ["pomme", 5, 6, 60, 30];
const even = fruits.every(checkFruits);

function checkFruits(fruits){
    return fruits == 60;
}
console.log(even);
//return: false