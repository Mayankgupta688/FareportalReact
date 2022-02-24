import React from 'react';
import Axios from "axios"
import EmployeeDetailsComponent from "../components/EmployeeDetailsComponent"

export default class EmployeeListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Employee List is given Below:</h1>
                {this.state.employeeList.map((employee) => {
                    return <EmployeeDetailsComponent key={employee.id} {...employee} deleteEmployee={this.deleteEmployee}></EmployeeDetailsComponent>
                })}
            </div>
        )
    }

    deleteEmployee = (event) => {
        debugger;
        Axios.delete("https://5a530e1477e1d20012fa066a.mockapi.io/login/" + event.target.id).then(() => {
            alert("Employee is Deleted");
            this.getData();
        })
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        var dataPromise = Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login");
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }
}

// Create a form which takes Name, id, createdAt and Avatar as Input, Add data to your database.. (Post Request)