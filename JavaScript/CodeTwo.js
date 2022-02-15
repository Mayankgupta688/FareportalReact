function getData(a, b) {
    debugger;
    console.log("Hello World...")
    for(var i = 0; i< arguments.length; i++ ) {
        console.log(arguments[i])
    }
}

getData("Mayank");

getData("Mayank", 10, 30);

getData("Mayank", "30");

debugger;
console.log(window.a)


function getDataAge(userAge, userSalary) {
    debugger;
    console.log("Value is " + userAge)
}

getDataAge()