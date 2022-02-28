import React, { useState } from "react";

function newComponent() {
    return (<h1>Employee Form is given Below</h1>)
}

export default function ObjectDataComponent() {

    var [empDetails, setEmployeeDetails] = useState({
        name: "",
        age: "",
        designation: ""
    });

    function commonFunction(event) {
        setEmployeeDetails({
            ...empDetails,
            [event.target.id]: event.target.value
        })
    }

    return (
        <div>
            Wont Work: <newComponent></newComponent><br/><hr/>
            This Works: {newComponent()}<br/><hr/>
            <h1>Employee Name: {empDetails.name}</h1>
            <h2>Employee Age: {empDetails.age}</h2>
            <h3>Employee Designation: {empDetails.designation}</h3>
            <div>
                <label>Employee New Name:</label><input onChange={commonFunction} id="name" type="text" value={empDetails.name} /><br/><br/>
                <label>Employee New Age:</label><input onChange={commonFunction} id="age" type="text" value={empDetails.age} /><br/><br/>
                <label>Employee New Designation:</label><input onChange={commonFunction} id="designation" type="text" value={empDetails.designation} /><br/><br/>
            </div>
        </div>
    )
}