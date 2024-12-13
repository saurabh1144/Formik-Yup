import React, { useState } from 'react'
import Form from './Form';
import Advance from './Advance';
const Home = () => {
    const [show,setShow]=useState(true);


  return (
    <>
    <div className='home'>
    <button className='btn' onClick={()=>{setShow(true)}}>Form</button>
    <button className='btn' onClick={()=>{setShow(false)}}>Advanced Form</button>
    </div>

    <div>
    {show ?<Form/>:<Advance/>}
    </div>
    </>
  )
}

export default Home
