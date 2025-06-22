import React, { useReducer } from 'react'
 
    const initialValue={count:0};
    const  reducerFuncion=(state,action)=>{
        switch(action.type){
            case "Increment":
                return{count:state.count+1}
            case "Reset":
                return{count:0}
            case "Decrement":
                return{count:state.count-1}
            default:
                return{count:0}
        }
    }
const Reducer = () =>{
        const[state,dispatch]=useReducer(reducerFuncion,initialValue)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"Decrement"})}>dec</button>
      <button onClick={()=>dispatch({type:"Reset"})}>res</button>
      <button onClick={()=>dispatch({type:"Increment"})}>inc</button>
    </div>
  )

}
export default Reducer
