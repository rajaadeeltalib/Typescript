//Find Oldest person in array

interface Oldest {
    age: number;
    }
    
    function getOldest(person: Oldest[]):Oldest{
    return person.sort((a, b) => b.age - a.age)[0];
    }
    
    const person = [{age: 25},{age: 30},{age: 35},{age: 40}];
    console.log(getOldest(person));