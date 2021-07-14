import React, { useState } from "react";
import axios from "axios";

function AddPost() {
  const [post, setPost] = useState({
    body: "",
    title: "",
    userId: "",
    id: "",
  });
  const [display, setDisplay] = useState()
  const formHandler = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setPost({
      ...post,
      [fieldName]: value,
    });
  };

  const onAddPost = (e) => {
    console.log("adding post");
    e.preventDefault()
    axios
      .post("http://localhost:8080/posts", post)
      .then((responce) => {
        console.log(responce.data)
        setDisplay(true)
      })
      .catch(err => setDisplay(false))
      setTimeout(()=>{
        setDisplay(false)
        setPost({...post,body:'',title:'',userId:''})
      },3000)
  };
  const Show = ({post})=>{
    return(
    <>
    <h1>post is added</h1>
    <h2>title-{post.title}</h2>
    <h2>body-<p>{post.body}</p></h2>
    </>
    )
  }
  console.log(post);
  return (
    <div className='bg-dark-center'>
      <form
        className="form-group container w-50"
        onSubmit={onAddPost}
        encType="multipart/orm-data"
      >
        <label>BODY</label>
        <textarea
          className="form-control"
          name="body"
          value={post.body}
          onChange={formHandler}
          required
        />

        <label>TITLE</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={post.title}
          onChange={formHandler}
          required
        />

        <label>USER ID</label>
        <input
          className="form-control"
          type="text"
          name="userId"
          value={post.userId}
          onChange={formHandler}
          required
          
        />
        <button className="btn btn-primary form-control" >
        submit
      </button>
      <div className='mt-4'>{display && <Show post={post}/>}</div>
      </form>
      
      <br />
      
    </div>
  );
}

export default AddPost;
