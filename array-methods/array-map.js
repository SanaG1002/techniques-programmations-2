//array map: 
const age = [7, 25, 38, 4];
const newAge = age.map(mapFunction);

function mapFunction(x){
    return x + 1
}

console.log(newAge);
//return: [8, 26, 39, 5]