// function which is returning sum from array

function getTotal(numbers){
    return numbers.reduce((acc, item) => {
    return acc + item;
    }, 0)
    }
    console.log(getTotal([5, 8, 10]));