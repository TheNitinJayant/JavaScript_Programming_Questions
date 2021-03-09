function Q1(){

}

function Q2(){

    // Block is also known as compound statement and it is used to combine multiple statements into one block
    // We combine multiple statements into one block where javascript expect a single statement
    // The above line can be justified with the if statement block where the if statement expects only one statement and to make multiple statements one statement, we use the block.

    function blockScopeExample1(){

        { // this block create its own scope which is different from the global execution context or in this case is the blockScopeExample1 function scope.
            var x = 10;
            let y = 20;
            const z = 30;

            console.log(x); // prints 10
            console.log(y); // prints 20
            console.log(z); // prints 30
        }

        
        console.log(x); // prints 10 because x is in the function scope.
        console.log(y); // this will give error because let is block scoped.
        console.log(z); // this will give error because const is also block scoped.

    }

    function blockScopeExample2(){
        
        

    }

    blockScopeExample1();

}

function Q3(){
    
    function shadowingExample1(){

        var a = 100;
        
        {
            var a = 10; // this variable a shadows the variable a in the global scope and this is called shadowing.
            console.log(a);
        }
        console.log(a); // this also prints 10 because of shadowing. the memory location to which a was refering to was changed to 10 inside the block by the variable a.
    }

    function shadowingExample2(){

        let a = 100;
        const b = 200;

        {
            let a = 10;
            let b = 20;

            console.log(a); // prints 10
            console.log(b); // prints 20

            // these variables inside the block shadow the let and const in the global function (but only inside the block) because of the different scope which is created for let and const.
        }

        console.log(a); // prints 100
        console.log(b); // prints 200

    }

    function shadowingExample3(){

        let a = 10;
        {
            var a = 100; // illegal shadowing, error will be thrown because let cannot be declared again and var is breaking its scoping rule which is the global scope.
            console.log(a);
        }
    }

    function shadowingExample4(){

        var a = 10;
        {
            let a = 100; // legal shadowing
            console.log(a); // prints 100
        }
        console.log(a); // prints 10
    }

    shadowingExample4();
}

function Q4(){

    function blockChainingExample1(){
        const a = 100;
        {
            const a = 200;
            {
                const a = 300;
                console.log(a); // prints 300
            }
            console.log(a); // prints 200
        }
        console.log(a); // prints 100
    }

    function blockChainingExample2(){
        let a = 100;
        {
            let a = 200;
            {
                let a = 300;
                console.log(a); // prints 300
            }
            console.log(a); // prints 200
        }
        console.log(a); // prints 100
    }

    // these two cases were possible because let and const in these examples did not break their scope.
}


function main(){
    Q3();
}

main();