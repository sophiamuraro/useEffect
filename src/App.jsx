import { useEffect, useState } from "react"
import SpecialComponent from "./SpecialComponent";

function App() {
  const [counter, setCounter] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  // componentWillMount
  useEffect(() => {
    document.title = 'React Hooks | useEffect';
  }, []);

  // componentWillUpdate
  useEffect(() => {
    alert('Valor do counter ' + counter);
  }, []);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function handleComponentVisibility() {
    setShowComponent(!showComponent)
  }


  return (
    <>
     <h1>Let`s code</h1>
     <h2>{counter}</h2>
     <button onClick={increaseCounter}>Increase counter</button>
     &nbsp;
     <button onClick={handleComponentVisibility}>{showComponent ? 'Hide component' : 'Show special component'}</button>
     <br />
     {showComponent && <SpecialComponent />}
    </>
  )
}

export default App
