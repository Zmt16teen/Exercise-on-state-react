import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );

  function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);

    function handleStepPrevious() {
      setStep((s) => s - 1);
    }

    function handleStepNext() {
      setStep((s) => s + 1);
    }

    function handleCountPrevious() {
      setCount((c) => c - step);
    }
    function handleCountNext() {
      setCount((c) => c + step);
    }

    return (
      <div>
        <button onClick={handleStepPrevious}>-</button>{" "}
        <span>Step: {step}</span> <button onClick={handleStepNext}>+</button>
        <br />
        <button onClick={handleCountPrevious}>-</button>{" "}
        <span>Count: {count}</span> <button onClick={handleCountNext}>+</button>
        <br />
        <p>
          {count} days from today is {date.toDateString()}
        </p>
      </div>
    );
  }
}
