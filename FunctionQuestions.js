var log = console.log;

function Q1(){
    const product = function multiply(num1, num2) {
        return num1 * num2;
    }

    // this will work because we can create an anonymous function and then assign it to a variable.
    const product2 = function (num1, num2) {
        return num1 * num2;
    }

    log( product(2,2) );
    log( product2(2,2) ); 
    
    log( multiply(2,2) ); // this will give error because in javascript, functions are objects and here multiply function is stored in product variable.

}

function Q2() {
    function add(n1, n2) {
        return n1 + n2;
    }

    const subtract = function(n1, n2){
        return n1-n2;
    }

    const multiply = function product(n1, n2){
        return n1*n2;
    }

    function divide(n1, n2){
        return n1/n2;
    }

    const operations = [add, subtract, multiply, divide];

    for(let func of operations){
        log(func(10,5));
    }
}

function Q3(){

    function multiplyBy(number){
        return function (x){
            return x * number;
        }
    }

    const triple = multiplyBy(3);
    const double = multiplyBy(2);
    const half = multiplyBy(0.5);

    log(triple(3));
    log(double(3));
    log(half(3));

}

function Q4(){
    function hoistingExample1(){

        console.log(animal);
        var animal = "Dog"; // the varibale animal is hoisted upwards when the interpreter reads the code.

        // It goes like this

        // var animal;
        // console.log(animal);
        // animal = "Dog";

    }

    function hoistingExample2(){

        console.log(animal);
        const animal = "Dog"; // variable declaration with const are not hoisted like they are in var

    }

    function hoistingExample3(){

        console.log(animal);
        let animal = "Dog"; // variable declaration with let are not hoisted like they are in var

    }


    hoistingExample1();
}

function Q5(){

    function hoistingExample1(){

        willThisFunctionBeHoisted(); // this function gets hoisted and executed successfully

        function willThisFunctionBeHoisted(){
            console.log("Yes it is hoisted");
        }

    }

    function hoistingExample2(){

        console.log(willThisFunctionBeHoisted); // the variable get hoisted but not the actual function shown in the line below. 

        willThisFunctionBeHoisted(); // this function does not get hoisted.

        var willThisFunctionBeHoisted = function (){
            console.log("Yes it is hoisted");
        }

    }

    hoistingExample1();
}

function main(){
    Q5();
}

main();