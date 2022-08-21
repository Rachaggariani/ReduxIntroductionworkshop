
// import './App.css';
// import {useDispatch,useSelector} from"react-redux";
// import {decrement, increment,reset}from './Redux/action';
// function App() {
//   const state=useSelector(state=>state);
//   console.log(state);
//   const Dispatch=useDispatch()
//   const handleIncrement=()=>{
//     Dispatch(increment())   
//   }
//   const handleDecrement=()=>{
//     Dispatch(decrement())
//   }
//   const handleReset=()=>{
//     Dispatch(reset())
//   }
//   return (
//     <div className="App">
//       <button onClick={handleIncrement}>+</button>
//       <button onClick={handleDecrement}>-</button>
//       <button onClick={handleReset}>Reset</button>
//      <h1>{state.count}</h1>  
//     </div>
//   );
// }

// export default App;
import React from 'react'
import './App.css';
import Forms from './Forms';
import List from './List';
function App() {
 
  return (
    <>
    <Forms/>
    <List/>
    </>
    
  )
}

export default App
