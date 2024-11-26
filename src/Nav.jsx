import React, { useEffect, useState } from 'react'
import './Nav.css'
import {Link, Outlet} from 'react-router-dom'
const Nav = ({search,setSearch}) => {
    
  return (
    <div className='nav-container'>
     
     <div className="topnav">
          
          <p><Link to='/' style={{textDecoration:'none'}}>Home</Link></p>
          <p><Link to='/About' style={{textDecoration:'none'}}>About</Link></p>
          <p><Link to='/Post' style={{textDecoration:'none'}}>Post</Link></p>
          
          <input type="text" placeholder="Search.." onChange={(e)=>setSearch(e.target.value)}/>
          <Outlet></Outlet>
       
        
        
      </div>
    </div>
  )
}

export default Nav
