function add(n1: number, n2: number, printResult: boolean, phrase: string){
    const result =  n1 + n2
    if(printResult ){
        console.log(phrase + result);
    }else{
        return result;
    }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let phrase = 'Test is: ';

const result = add(number1, number2, printResult, phrase);
console.log(result)