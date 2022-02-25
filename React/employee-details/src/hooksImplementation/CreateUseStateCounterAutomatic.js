import { useState, useEffect } from "react";

export default function CreateUseStateCounterAutomatic() {
    var [counter, setCounter] = useState(0);
    var [timer, setTimer] = useState(11110);

    useEffect(() => {
        console.log("This is Called only Once...");

        return () => {
            debugger;
            console.log("Destroy Component")
        }
    }, [])

    useEffect(() => {
        debugger
        console.log("Timer Value Updated");

        return () => {
            debugger;
            console.log("Called Befor Timer useEffect is Called")
        }
    }, [timer])

    useEffect(() => {
        console.log("Counter Value Updated");
    }, [counter])


    // useEffect(() => {
    //     console.log("Counter and Counter Value Updated");
    // }, [counter, timer])


    setTimeout(() => {
        setCounter(counter + 1)
    }, 10000)

    setTimeout(() => {
        setTimer(timer + 100)
    }, 5000)

    return (
        <div>
            <h1>Counter Value is: {counter}</h1>
            <h2>The Timer value is: {timer}</h2>
        </div>
    )
}