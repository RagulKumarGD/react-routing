import React, { useState } from 'react'

const Newpost = ({posts,handlesubmit,title,setTitle,setpost,handeltitle,handelpost}) => {
   

  return (
    <div>
      <form onSubmit={()=>handlesubmit()}>
        <div>
        <label htmlFor='posttitle'>Title: </label>
        <input onChange={(e)=>handeltitle(e)} type='text' placeholder='Enter the title' id='posttitle'></input>
        </div>
        <br/>
        <div>
        <label htmlFor='postdes'>Post: </label>
        <input onChange={(e)=>handelpost(e)} type='text' placeholder='Enter the title' id='postdes'></input>
        </div>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Newpost
