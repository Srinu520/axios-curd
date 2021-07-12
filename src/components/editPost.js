import React, { useState } from "react";
import axios from "axios";

function EditPost() {
  const [post, setPost] = useState({
    body: "",
    title: "",
    userId: "",
    id: "",
  });
  const formHandler = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setPost({
      ...post,
      [fieldName]: value,
    });
  };

  const onEditPost = () => {
    console.log("updating post");
    axios
      .put(`http://localhost:8080/posts/${post.id}`, post)
      .then((responce) => console.log(responce.data));
  };

  console.log(post);
  return (
    <div>
      <form
        className="form-group container w-50"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        encType="multipart/orm-data"
      >
        <label>Body</label>
        <textarea
          className="form-control"
          name="body"
          value={post.body}
          onChange={formHandler}
        />

        <label>Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={post.title}
          onChange={formHandler}
        />

        <label>userId</label>
        <input
          className="form-control"
          type="text"
          name="userId"
          value={post.userId}
          onChange={formHandler}
        />
        <label>id</label>
        <input type="number" name="id" onChange={formHandler}  className="form-control"/>
        {post.title}
        {post.body}
        {post.userId}
        {post.id}
      </form>
      <button className="btn btn-primary form-control" onClick={onEditPost}>
        submit
      </button>
      <br />
    </div>
  );
}

export default EditPost;
