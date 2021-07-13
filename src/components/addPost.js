import React, { useState } from "react";
import axios from "axios";

function AddPost() {
  const [post, setPost] = useState({
    body: "",
    title: "",
    userId: "",
    id: "",
  });
  const [display, setDisplay] = useState(false)
  const formHandler = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setPost({
      ...post,
      [fieldName]: value,
    });
  };

  const onAddPost = () => {
    console.log("adding post");
    axios
      .post("http://localhost:8080/posts", post)
      .then((responce) => {
        console.log(responce.data)
        setDisplay(!display)
      });
  };
  const Show = ({post})=>{
    return(
    <>
    <h1>post is added</h1>
    <h2>title-{post.title}</h2>
    <p>{post.body}</p>
    </>
    )
  }
  console.log(post);
  return (
    <div className='bg-dark-center'>
      <form
        className="form-group container w-50"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        encType="multipart/orm-data"
      >
        <label>BODY</label>
        <textarea
          className="form-control"
          name="body"
          value={post.body}
          onChange={formHandler}
        />

        <label>TITLE</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={post.title}
          onChange={formHandler}
        />

        <label>USER ID</label>
        <input
          className="form-control"
          type="text"
          name="userId"
          value={post.userId}
          onChange={formHandler}
        />
        <button className="btn btn-primary form-control" onClick={onAddPost}>
        submit
      </button>
      </form>
      
      <br />
      {display && <Show post={post}/>}
    </div>
  );
}

export default AddPost;
