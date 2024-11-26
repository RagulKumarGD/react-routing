import React from 'react'
import {  FaTrash } from 'react-icons/fa'
import {Link, Outlet} from 'react-router-dom'

const Home = ({post,search,handledel,}) => {
  return (
    <div>
       <ul style={{listStyle:'none'}}>
        {post.filter((inn)=>(inn.title.toLowerCase()).includes(search.toLowerCase())).map((i)=>(
            <li key={i.id}>
                <h2>{i.title}</h2>
                <p>{i.datetime}</p>
                <p>{(i.body).length <25 ? i.body:`${(i.body).slice(0,25)}...`}</p>
                <FaTrash role='button' onClick={()=>handledel(i.id)}/>
                
                <p><Link to={`/edit/${i.id}`}>EDIT</Link></p>
                </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
