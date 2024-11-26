import React from 'react'
import { useParams } from 'react-router-dom'

const Editpost = ({handlechange,handeledittitle,handeleditpost,post}) => {
    const {id}=useParams()
    
    
  return (
    <div>
       
       <form onSubmit={()=>handlechange(id)}>
        <div>
        <label htmlFor='posttitle'>EditTitle: </label>
        <input onChange={(e)=>handeledittitle(e)} type='text' placeholder='Enter the title' id='posttitle'></input>
        </div>
        <br/>
        <div>
        <label htmlFor='postdes'>EditPost: </label>
        <input onChange={(e)=>handeleditpost(e)} type='text' placeholder='Enter the title' id='postdes'></input>
        </div>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Editpost
