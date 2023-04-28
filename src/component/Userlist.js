import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Userdata from './Userdata';

function Userlist() {
    const [users, setusers] = useState([])
   useEffect (()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setusers(res.data));
        
   },[])
   console.log(users)
  return (
    <div>
        helloooooo
    {users.map((user)=><Userdata user={user}/>)}
    </div>
  )
}

export default Userlist
