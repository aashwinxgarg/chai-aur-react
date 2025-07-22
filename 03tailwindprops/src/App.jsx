import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";

function App() {
    let myObj = {
        name: "Aashwin",
        age: 22
    };

    let newArr = [1, 2, 3, 4];

    return (
        <>
            <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
                Tailwind Test
            </h1>
            {/* <Card channel="chaiaurcode" someObj={myObj} myArr={[1,2,3]} someNewArr={newArr} /> */}
            <Card username="chaiaurcode" btntext="click me->"/>
            <Card username="hitesh"/>


        </>
    );
}

export default App;
