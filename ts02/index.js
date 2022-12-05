//Find Oldest person in array
function getOldest(person) {
    return person.sort(function (a, b) { return b.age - a.age; })[0];
}
var person = [{ age: 25 }, { age: 30 }, { age: 35 }, { age: 40 }];
console.log(getOldest(person));
