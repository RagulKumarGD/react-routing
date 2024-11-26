import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Pagelayout = () => {
  return (
   <>
        <Link to="/Postpage/1" style={{textDecoration:'none'}}>Post1</Link>
        <br/>
        <Link to="/Postpage/2" style={{textDecoration:'none'}}>Post2</Link>
        <br/>
        <Link to="/Postpage/3" style={{textDecoration:'none'}}>Post3</Link>   
        <br/>
        <Link to="/Postpage/Newpost" style={{textDecoration:'none'}}>Newpost</Link>   
        <Outlet/>
     </>
  )
}

export default Pagelayout
