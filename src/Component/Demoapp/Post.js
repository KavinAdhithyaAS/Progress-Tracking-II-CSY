import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Get = () => {
    const [item, setItem]=useState([]);
    useEffect(() =>{
    getData();
},[]);
async function getData(){
const response = await axios.get('http://cricbet99.com')
setItem(response.data);
}
  return (
    <div>
    {item.map((item) => (
        <h1>{item.id}"-----"{item.title}</h1>
    ))}
    </div>
  );
}

export default Get