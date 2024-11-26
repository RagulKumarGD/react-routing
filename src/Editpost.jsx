import React from 'react'
import './Editpost.css'
import { useParams } from 'react-router-dom'

const Editpost = ({handlechange,handeledittitle,handeleditpost,post}) => {
    const {id}=useParams()
    console.log(id);
    
    
  return (
    <div className='form-list'>
       
       <form onSubmit={()=>handlechange(id)} className='form-lists'>
        <div className='form-listss'>
        <label htmlFor='posttitle'>EditTitle </label>
        <input onChange={(e)=>handeledittitle(e)} type='text' placeholder='Enter the title' id='posttitle'></input>
        </div>
        <br/>
        <div className='form-listss'>
        <label htmlFor='postdes'>EditPost </label>
        <input onChange={(e)=>handeleditpost(e)} type='text' placeholder='Enter the title' id='postdes'></input>
        </div>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Editpost
