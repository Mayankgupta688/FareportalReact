import { useState, useEffect } from "react";

export default function CreateUseStateCounterAutomatic() {
    var [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Hello All");
    }, [])

    useEffect(() => {
        console.log("Hello All 1");
    })

    debugger;

    setTimeout(() => {
        debugger;
        setCounter(counter + 1)
    }, 1000)

    return (
        <div>
            <h1>Counter Value is: {counter}</h1>
        </div>
    )
}