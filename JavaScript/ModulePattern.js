var employeeData = {
    name: "Mayank",
    age: 30,
    designation: "VP",
    salary: 1,
    getInfo: function() {
        console.log(this.name)
        console.log(this.age)
        console.log(this.designation)
    }
}

employeeData.getInfo();