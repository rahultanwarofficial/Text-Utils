import React, { useState } from 'react'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
//   } from "react-router-dom";


export default function App() {

    let [mode, setMode] = useState("light");
    let [alert, setAlert] = useState(null);

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.background = "#2f3236"
            theAlert("success", "Dark mode has been enabled")
        }
        else {
            setMode("light");
            document.body.style.background = "white"
            theAlert("warning ", "Dark mode has been disabled")
        }
    }

    const theAlert = (type, message) => {
        setAlert({
            type: type,
            msg: message
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    return (

        <>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <TextForm mode={mode} theAlert={theAlert} />
            {/* <About /> */}
        </>

    )
}
