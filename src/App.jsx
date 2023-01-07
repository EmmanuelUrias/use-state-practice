import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)
  //useState is a hook that allows you to add state to functional components in React. It returns an array with two elements: the current state value and a function that allows you to update the state value.

  return (
    <div style={{'textAlign': 'center', 'marginTop': '250px'}}>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 5)}>Add 5</button> {/* Mistake: I made a arrow function that said {setCounter + 1}  is this incorrect because setCounter is to update the current counter value so we had to use the setCounter function and pass the current value plus what we want to update into it */}
      {/* It's important to note that the setCounter function does not directly set the value of the counter variable. Instead, it tells React to update the value of counter and re-render the component. This ensures that the component is always in sync with the current state of your application. */}
    </div>
  );
}

export default App;
