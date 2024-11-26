
import React from 'react'
import { useParams } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
const Postpage = ({post,search}) => {
    const {id}=useParams()
    
  return (
    <div>
      
      <ul style={{listStyle:'none'}}>
        {post.filter((inn)=>(inn.id===id)).map((i)=>(
            <li key={i.id}>
                <h2>{i.title}</h2>
                <p>{i.datetime}</p>
                <p>{(i.body).length <25 ? i.body:`${(i.body).slice(0,25)}...`}</p>
                <FaTrash role='button' onClick={()=>handledel(i.id)}/>
                </li>
        ))}
      </ul>
        
      
    </div>
  )
}

export default Postpage
