import React from 'react'
import { useNavigate } from 'react-router-dom'
const Word = () => {
    const navigate=useNavigate();
    const BACK = () =>{
        navigate('/Contact');
    }
    const NEXT = ()=>{
        navigate('/Home')
    }
    const IMAGE = () =>{
        navigate('/Eee')
    }

  return (
<>
    <div>OPENING YOUR WORD PAGE</div>
   <h1> <a href='http://wordart.com'>click</a></h1>
    <button onClick={BACK}>BACK</button>
    <button onClick={NEXT}>NEXT</button>
    <button onClick={IMAGE}>IMAGE</button>
    </>
  )
}

export default Word