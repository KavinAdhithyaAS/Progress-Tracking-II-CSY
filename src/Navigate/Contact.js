import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
    const navigate=useNavigate();
    const BACK = () =>{
        navigate('/Home');
    }
    const NEXT= () => {
        navigate('/Word')
    }

  return (
<>
    <div>GET CONTACT!!</div>
    <button onClick={BACK}>BACK</button>
    <button onClick={NEXT}>NEXT</button>
    </>
  )
}

export default Contact