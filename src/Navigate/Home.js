import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate();
    const BACK = () =>{
        navigate('/Login');
    }
    const NEXT= () => {
        navigate('/Contact')
    }

  return (
<>
    <div>OPENING YOUR HOME PAGE </div>
    <button onClick={BACK}>BACK</button>
    <button onClick={NEXT}>NEXT</button>
    </>
  )
}

export default Home