import React, { useState } from 'react'
import './Newpost.css'

const Newpost = ({posts,handlesubmit,title,setTitle,setpost,handeltitle,handelpost}) => {
   

  return (
    <div className='form-list'>
      <form onSubmit={()=>handlesubmit()} className='form-lists'>
        <div className='form-listss'>
        <label htmlFor='posttitle'>Title </label>
        <input onChange={(e)=>handeltitle(e)} type='text' placeholder='Enter the title' id='posttitle'></input>
        </div>
        <br/>
        <div className='form-listss'>
        <label htmlFor='postdes'>Post </label>
        <input onChange={(e)=>handelpost(e)} type='text' placeholder='Enter the post' id='postdes'></input>
        </div>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Newpost
