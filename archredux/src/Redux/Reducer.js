// const initState={count:0}

// const Reducer=(state=initState,action)=>{
//     switch(action.type){
//         case "Increment":return{count:state.count+1}
//         case "Decrement":return{count:state.count-1}
//         case"Reset":return{count:0}
//         default:return state
//     }
    
// }
// export default Reducer;
const initState=[];
const Reducer=(state=initState,action)=>{
    switch(action.type){
        case "Add_user":return [...state,action.payload];
        default:return state;
    }
    
}
export default Reducer;