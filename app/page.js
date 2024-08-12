'use client'
import { useState } from "react";

export default function Home() {

    const [value, setValue] = useState(0)
    const [isRolled, setIsRolled] = useState(false)
    const [dice, setDice] = useState([])

    const handleInputChange = (e) => {
        const inputValue = parseInt(e.target.value, 10);
        if (isNaN(inputValue) || inputValue > 99 || inputValue < 0) {
            alert('Please select a number between 0 - 99!!');
            return;
        } 
        setValue(inputValue);
    }

    const handleRollCalled =() => {
        setIsRolled(!isRolled)
        const array = Array.from({length: value}, () => Math.floor(Math.random() * 6) + 1);
        setDice(array)
    }

    return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1>Rolling Dice</h1>
      <h2>Number of Dice</h2>
      <input type="text" onChange={handleInputChange} value={value} className="border border-[#45474B] shadow-sm p-4 rounded" min={0} max={99}/>
      <button className="bg-purple-400 rounded text-white px-4 py-2" onClick={handleRollCalled}>Roll</button>
      {isRolled ? <div className="grid grid-cols-5 gap-5">
        {dice.map((item, index) => {
            return <div key={index} className="flex bg-slate-300 border-none px-4 py-2 shadow-sm text-black text-lg font-bold rounded-md">
                {item}
            </div>
        })}
      </div> : <div>Please enter some dice to roll</div>}
    </main>
  );
}
