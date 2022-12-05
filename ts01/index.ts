// function which is returning sum from array

function getTotal(numbers: number[]):number{
    return numbers.reduce((acc:number, item:number) => {
    return acc + item;
    }, 0)
    }
    console.log(getTotal([5, 8, 10]));