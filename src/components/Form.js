import React, { useRef, useState } from "react";

function Form() {
  const [post, setPost] = useState({});
  //const postForm = useRef()
  //const submitHandler = (e)=>{
  //e.preventDefault()
  // let formeel = document.getElementById('postForm')
  // const formdata = new FormData(postForm)
  // console.log(formdata)
  // const fieldName = e.target.value
  // const value = e.target.value
  //console.log(postForm.current.elements.name,formdata)
  //formHandler(e)
  //console.log(post)

  //}
  const formHandler = (e) => {
    e.preventDefault();
    const fieldName = e.target.name;
    const value = e.target.value;
    setPost({
      ...post,
      [fieldName]: value,
    });
  };
  console.log(post);
  return (
    <form
      className="form-group container w-50"
      onSubmit={(e) => e.preventDefault()}
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

      <button className="btn btn-primary form-control">submit</button>
      <br />
      {post.title}
      {post.body}
      {post.userId}
    </form>
  );
}

export default Form;
