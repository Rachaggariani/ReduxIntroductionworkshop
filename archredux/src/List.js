import React from 'react'
import {useSelector} from 'react-redux';
import Card from './Card'; 
function List() {
    const state=useSelector(state=>state);
  return (
    <div>
      {state.map((el,index)=>(<Card key={index} user={el} />))}
    </div>
  )
}

export default List
