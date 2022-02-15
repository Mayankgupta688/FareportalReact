var empName = "TechnoFunnel";

function functionOne() {
    var empName = "Mayank";
    
    function innerFunction() {
        console.log(empName)
        console.log(window.empName)

        function innerInnerFunction() {
            alert("Mayank")
        }

        innerInnerFunction();
    }

    innerFunction()
}

functionOne()

console.log(empName);