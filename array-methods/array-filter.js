//array filter:
const years = [1984, 2018, 2005, 1993];
const selectYears = years.filter(conditionYears);

function conditionYears(years){
    return years > 2000;
}

console.log(selectYears);
//return: [2018, 2005]