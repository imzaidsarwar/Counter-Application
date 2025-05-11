import { useState } from 'react';
import './App.css';

export default function App()
{
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => count > 0 && setCount(count - 1);

  const reset = () => setCount(0);


  return (
    <div className = "container">

      <div className = "mainContent">
      
        <h1>{count}</h1>

        <div className="buttons">
          <button onClick={increment}> + </button>
          <button onClick={decrement}> - </button>
          <button onClick={reset}> &#8634; </button>
        </div>
      </div>
      
      
    </div>
  );
}