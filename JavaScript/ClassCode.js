class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    getEmpName() {
      return this.name;
    }
    
    getEmpAge() {
      return this.age;
    }
}

var employeeOne = new Employee("Mayank", 10);

employeeOne.getEmpAge()
employeeOne.getEmpName()

console.log(employeeOne.name)
console.log(employeeOne.age)

debugger;