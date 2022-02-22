var num = {};

Object.defineProperty(num, "salary", {
    get : function () {

        alert("Correct Number is: " + value);
        return value;
    },
    set : function(inputValue){
        debugger;
        if(isNaN(inputValue)) {
            debugger;
            alert("Set Correct Number");
            value = 0
        } else {
            value = inputValue;
        }
    }
});

num.salary = "adssadasda";
alert(num.salary);

num.salary = "10000";
alert(num.salary);

Object.defineProperty(num, "firstName", {
    get : function () {
        return value;
    },
    set : function(inputValue){

        inputValue = inputValue.replace(" ", ",");

        document.getElementById("userInput").value = inputValue;
        value = inputValue;
    }
});

Object.defineProperty(num, "lastName", {
    get : function () {
        if(value == "Gupta") {
            return "No Last Name"
        }
        return value;
    },
    set : function(inputValue){
        inputValue = inputValue.replace(" ", ",");
        value = inputValue;
    }
});


setInterval(() => {
    num.firstName = Math.floor(Math.random() * 100);
}, 10000);

function changeInput(event){
    debugger;
    num.firstName = event.target.value;
    
}