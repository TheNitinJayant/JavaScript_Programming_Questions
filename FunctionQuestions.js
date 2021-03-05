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
    
}


function main(){
    Q1();
}

main();