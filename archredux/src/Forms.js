import React,{useState} from 'react'
import {AddUser}from './Redux/action';
import {useDispatch} from 'react-redux';
function Forms() {
    const dispatch=useDispatch();
const [user,setuser]=useState('');
const handlechange=(e)=>{
setuser(e.target.value);
}
const handleSubmit=(e)=>{
 e.preventDefault();
setuser('');
 dispatch(AddUser(user));
 }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input onChange={handlechange} value={user} />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Forms

