import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "1234567890";
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.random() * str.length;
            pass += str.charAt(randomIndex);
        }
        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    const copyPasswordToClipBoard = useCallback(()=> {
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0,9)
        window.navigator.clipboard.writeText(password);
    },[password])

    useEffect(()=> {
        passwordGenerator();
    },[length, numberAllowed, charAllowed, passwordGenerator])

    return (
        <>
            <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
                <h1 className="text-2xl text-center text-white my-6 ">
                    Password Generator
                </h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-3 px-3 bg-white"
                        placeholder="Password"
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                    onClick={copyPasswordToClipBoard}
                    className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer">
                        Copy
                    </button>
                </div>
                <div className="flex text-md gap-x-7">
                    <div className="flex items-center gap-x-1">
                        <input
                            type="range"
                            min={6}
                            max={20}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => {setLength(e.target.value)}}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numberAllowed}
                            id="numberInput"
                            onChange={() => {
                                setNumberAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            id="characterInput"
                            onChange={() => {
                                setCharAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor="characterInput">Characters</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
