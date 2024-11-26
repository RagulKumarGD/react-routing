import React, { useEffect, useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Nav from './Nav.jsx'
import Newpost from './Newpost.jsx'
import Postpage from './Postpage.jsx'
import Missing from './Missing.jsx'
import Post from './Post.jsx'
import Pagelayout from './Pagelayout.jsx'
import './App.css'


import {Routes,Route,Link, useParams, useNavigate} from 'react-router-dom'
import Editpost from './Editpost.jsx'




const App = () => {
  const [search,setSearch]=useState('')
  const [posts,setPosts]=useState([])
  const [title,setTitle]=useState('')
  const [post,setpost]=useState('')
  const navigate=useNavigate()
  const [edititle,seteditTitle]=useState('')
  const [editpost,seteditpost]=useState('')
 
  useEffect(()=>{
    const fetchh=async()=>{
       const response=await fetch('http://localhost:3000/items')
       const data=await response.json()
       setPosts(data)
       
       
    }
    (async()=>await fetchh())()
  },[])
  // useEffect(()=>{
  //   const fetchh=async()=>{
  //     const respone=await api.get('/items')
  //     setPosts(respone.data)
      
  //   }
  //   fetchh()
  // },[])


  const handelpost=(e)=>{
    setpost(e.target.value)
    console.log(post);
    
    
}
const handeltitle=(e)=>{
 setTitle(e.target.value)
console.log(title);

 
}
const handeleditpost=(e)=>{
  seteditpost(e.target.value)
  console.log(editpost);
  
  
}
const handeledittitle=(e)=>{
seteditTitle(e.target.value)
console.log(edititle);


}
const handlesubmit=async()=>{
    const id=(posts.length+1).toString()
    const newdata={id:id,title:title,body:post}
   const response=await fetch('http://localhost:3000/items',
    {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        id:id,
        title:title,
        body:post
      })
    }
   )
  //  (async()=>await fetchh())()
  const responsee=await fetch('http://localhost:3000/items')
  const data=await responsee.json()
       setPosts(data)
  
    // const response=await api.post('/items',newdata)
    // setPosts(response.data)
    navigate(-1)

}
 const handledel=async(id)=>{
  const response=await fetch(`http://localhost:3000/items/${id}`,
    {
      method:'DELETE',
      headers:{'Content-Type':'application/json'},
      
    }
   )
   const responsee=await fetch('http://localhost:3000/items')
       const data=await responsee.json()
       setPosts(data)
  // const response=await api.delete(`/items/${id}`)
  // const respone=await api.get('/items')
  // setPosts(respone.data)
  
  

 }

 const handlechange=async(id)=>{
  
  
  // const newdata={id:id,title:edititle,body:editpost}
  // const response=await api.put(`/items/${id}`,newdata)
  // const respone=await api.get('/items')
  // setPosts(respone.data)


  // const newdata={id:id,title:title,body:post}
  console.log(`hiiiiiiii${id}`);
  
  const response=await fetch(`http://localhost:3000/items/${id}`,
   {
     method:'PUT',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({
       id:id,
       title:edititle,
       body:editpost
     })
   }
  )
  const responsee=await fetch('http://localhost:3000/items')
      const data=await responsee.json()
      setPosts(data)
      console.log(data);
      
  
  
 }

  
  return (
    <div className='Conatainer'>
       <Header title="SOCIAL MEDIA APP" />
       <br/>
       <Nav search={search} setSearch={setSearch}/>
    <Routes>
      <Route path='/' element={<Home post={posts} search={search} handledel={handledel}  />}/>
      <Route path='/About' element={<About/>}/>
      <Route path='*' element={<Missing/>}/>
      <Route path='/Post'>
              <Route index element={<Post post={posts} search={search} 
              title={title} posts={post} handlesubmit={handlesubmit} 
              setTitle={setTitle} setPost={setpost} handelpost={handelpost} 
              handeltitle={handeltitle} handledel={handledel}/>}/>  
              <Route path=":id" element={<Postpage post={posts} search={search}/>}/>    
      </Route>       
      <Route path="/edit/:id" element={<Editpost post={posts} handeleditpost={handeleditpost} handeledittitle={handeledittitle} handlechange={handlechange}/>}/>      
    </Routes>

    
    </div>
  )
}

export default App
