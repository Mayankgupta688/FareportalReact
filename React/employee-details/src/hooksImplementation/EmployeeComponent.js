import { useState, useEffect } from "react";
import EmployeeDetailsComponent from "../components/EmployeeDetailsComponent"
import Axios from "axios";

export default function EmployeeList() {

    var [employeeList, setEmployeeList] = useState([]);
    var [filteredEmployeeList, setFilteredEmployeeList] = useState([]);
    var [filterValue, setFilterValue] = useState("");

    useEffect(() => {
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            setEmployeeList(response.data);
            setFilteredEmployeeList(response.data);
        })
    }, []) 

    function filterList(event) {
        debugger;
        var updatedList = employeeList.filter((employee) => {
            return employee.name.indexOf(event.target.value) > -1;
        })

        setFilterValue(event.target.value);
        setFilteredEmployeeList(updatedList);
    }

    return (
        <div>
            <FilterList filterValue={filterValue} filterList={filterList}></FilterList>
            <h1>Employee List is given Below</h1>
            {filteredEmployeeList.map((employee) => {
                return <EmployeeDetailsComponent key={employee.id} {...employee}></EmployeeDetailsComponent>
            })}
        </div>
    )
}

function FilterList(props) {
    return (
        <div>
            Filter List <input value={props.filterValue} onChange={props.filterList} type="text" /><br/><br/>
        </div>
    )
}