// export const increment=()=>{
//     return {type:"Increment"}

// }
// export const decrement=()=>{
//     return { type:"Decrement"}
// }

// export const reset =()=>{
//     return {type:"Reset"}
// }
export const AddUser=(user)=>{
    return {type:"Add_user",payload:user};
}