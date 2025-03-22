import React, { useState } from 'react'
import axios from "axios"
import './Data.css'

function Login() {
    const [title,setTitle] = useState()
    const [desc,setDesc] = useState()

    const[user,setUser] = useState()
    const[about,setAbout] = useState()

    const[search,setSearch] = useState()

    async function Hsend(){
        const result = await axios.post('/header',{title,desc})
        console.log(result)
    }

    async function Bsend(){
      const result = await axios.post('/body',{user,about})
      console.log(result)
    }

    async function ssearch(){
      const result = await axios.post('/search',{search})
      console.log(result)
    }

  return (
    <div className='datacreate'>
      <h1>Header</h1>
      <div className='header'>
        <input type='text' onChange={(e) => setTitle(e.target.value)}></input>
        <input type='text' onChange={(e) => setDesc(e.target.value)}></input>
        <button onClick={Hsend}>send</button>
      </div>
      <h1>Body</h1>
      <div className='body'>
        <input type='text' onChange={(e) => setUser(e.target.value)}></input>
        <input type='text' onChange={(e) => setAbout(e.target.value)}></input>
        <button onClick={Bsend}>send</button>
      </div>
      <div className='search'>
        <input type='text' onChange={(e) => setSearch(e.target.value)}></input>
        <button onClick={ssearch}>send</button>
      </div>
    </div>
  )
}

export default Login
