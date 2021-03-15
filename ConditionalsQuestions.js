function Q1(){

    function switchCaseScopeExample1(){

        const a = 1;

        switch (a) {
            case 1:

                const result = a * a;
                
                break;

            case 2:

                const result = a + a;

                break;
        
            default:

                console.log("Default");

                break;
        }

        // This code will give error because the scope inside the switch statement is same so we cannot declare two result variables with same name.
    }

    function switchCaseScopeExample2(){

        const a = 1;

        switch (a) {
            case 1:{

                const result = a * a;
                
                break;
            }

            case 2:{

                const result = a + a;

                break;
            }

            default:

                console.log("Default");

                break;
        }

        // This code will not give error because the blocks inside the switch statement create a new scope inside every case.
    }
    
}


function Q2(){

    function inKeywordExample1(){

        const person = {
            name: "",
            age: 24
        }

        if(person.name){
            console.log("Has truthy name value");
        }

        if("name" in person){
            console.log("Has a name property");
        }
    }

    function inKeywordExample2(){

        const person = {
            name: "",
            age: 24
        }

        delete person.name;

        if(person.name){
            console.log("Has truthy name value");
        }

        if("name" in person){
            console.log("Has a name property");
        }
    }

}


function main(){
    Q1();
}

main();