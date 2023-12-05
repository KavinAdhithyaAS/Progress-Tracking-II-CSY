import react from 'react'
function App(){
    return <Greeting name="kavin"/>
  }
  function Greeting(props){
    return (
      <h1>
       Hello,{props.name}! Welcome To SKCET!!
      </h1>
    );
  }
  export default App;