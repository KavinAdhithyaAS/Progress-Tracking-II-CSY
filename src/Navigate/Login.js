import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate();
    const BACK = () =>{
        navigate('/');
    }
    const NEXT = () =>{
        navigate('/Home');
    }
  return (
<>
    <div>LOGIN...</div>
    <button onClick={BACK}>BACK</button>
    <button onClick={NEXT}>NEXT</button>
    </>
  )
}

export default Login