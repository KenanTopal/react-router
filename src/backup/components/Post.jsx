import React, { useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

const Post = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    
  },[])

  return (
    <>
      <div>Post Number : {params.postId}, path={location.pathname}</div>
      <button onClick={()=> navigate('/')}>Home</button>
    </>
  )
}

export default Post