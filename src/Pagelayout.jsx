import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Pagelayout = () => {
  return (
   <>
        <Link to="/Postpage/1">Post1</Link>
        <br/>
        <Link to="/Postpage/2">Post2</Link>
        <br/>
        <Link to="/Postpage/3">Post3</Link>   
        <br/>
        <Link to="/Postpage/Newpost">Newpost</Link>   
        <Outlet/>
     </>
  )
}

export default Pagelayout
