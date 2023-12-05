import React from 'react'
import { useState } from 'react';
const Conditional = () => {
    const [state,setState] = useState({
        isLoggedIn: false
    });
  return (state.isLoggedIn?<h1>Welcome user</h1>:<h1>please login to continue...</h1>
    
  )
}

export default Conditional