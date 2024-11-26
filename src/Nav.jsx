import React, { useEffect, useState } from 'react'
import {Link, Outlet} from 'react-router-dom'
const Nav = ({search,setSearch}) => {
    
  return (
    <div>
      <div>
        <input placeholder='Search Post' type='text' onChange={(e)=>setSearch(e.target.value)}/>
        <label htmlFor="search">Search Post</label>
      </div>
       <ul style={{listStyle:'none'}}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Post'>Post</Link></li>
          <Outlet></Outlet>
       </ul>
    </div>
  )
}

export default Nav
