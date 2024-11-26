import React from 'react'
import Newpost from './Newpost'
import { FaTrash } from 'react-icons/fa'
const Post = ({post,search,posts,handlesubmit,title,setPost,setTitle,handeltitle,handelpost,handledel}) => { 
  return (
    <div>
     
      <Newpost post={posts} handlesubmit={handlesubmit} title={title} setTitle={setTitle} setPost={setPost} handeltitle={handeltitle} handelpost={handelpost}/>
    </div>
  )
}

export default Post
