import React from 'react'
import { useNavigate } from 'react-router-dom'
import pic from '..images/abc.jpg'
const Eee = () => {
    const BACK = () => {
        const navigate=useNavigate
        navigate('/Home');
    }
  return (
    <div>
    <img src={pic} alt=''></img>
    <button onClick={BACK}>BACK</button>
    </div>
  )
}

export default Eee