import React from 'react';
import {Link } from 'react-router-dom';
import './Home.css'

const Home = ({post,search,handledel,}) => {
  return (
    <div className='Post-container'>
       <ul style={{listStyle:'none'}} className='List'>
        {post.filter((inn)=>(inn.title.toLowerCase()).includes(search.toLowerCase())).map((i)=>(
            <li key={i.id}>
                <h2>{i.title}</h2>
                <p>{i.datetime}</p>
                <p>{(i.body).length <25 ? i.body:`${(i.body).slice(0,25)}...`}</p>
                
                <div className='homebtn'>
                <button onClick={()=>handledel(i.id)}>DELETE</button>
                <button><Link to={`/edit/${i.id}`} style={{textDecoration:'none',backgroundColor:'white'}}>EDIT</Link></button>
                </div>
                </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
