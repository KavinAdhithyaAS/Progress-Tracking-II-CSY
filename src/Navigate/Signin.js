import React from 'react'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
    const navigate=useNavigate();
    const Next = () =>{
        navigate('/Login');
    }
  return (
<>
    <div>SIGNIN HERE...</div>
    <button onClick={Next}>NEXT</button>
    </>
  )
}

export default Signin