import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function GetPost() {
  const [posts, setPosts] = useState([])
  const onGetPost = () => {
    console.log("getting posts");
    axios
      .get("http://localhost:8080/posts")
      .then((responce) => {
        console.log(responce)
        setPosts(responce.data)
      });
  };
  const onDelete = (e)=>{
    console.log(e.target.value)
    const id = e.target.value
    axios.delete(`http://localhost:8080/posts/${id}`)
    onGetPost()
  }
  // const onEdit = (e)=>{
  //   console.log(e.target.value)
  // }
  useEffect(()=>{
    onGetPost()
  },[posts.id])
  console.log(posts)

  return (
    <div className='card text-center bg-dark'>
      {/* <button onClick={onGetPost}>click to see all posts</button> */}
      {
        posts.map(post =>{
          return(
            <div key={post.id} className='card w-50 text-center m-auto bg-info mt-3'>
              <h1>POST ID - {post.id}</h1>
              <hr />
              <h3>TITLE-{post.title}</h3>
              <hr />
              <p>{post.body}</p>
              <button value={post.id} onClick={onDelete} className='btn btn-danger'>DELETE</button>
              {/* <button value={post.id} onClick={onEdit}>edit</button> */}
              
              <Link  to={`/edit/${post.id}`} className='text-white text-decoration-none w-100'><button className='btn btn-primary form-control'>EDIT</button></Link>
            </div>
            
          )
        })
      }
    </div>
  );
}

export default GetPost;
