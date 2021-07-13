// import React, { useRef, useState } from "react";

// function Form() {
//   const [post, setPost] = useState({});
//   //const postForm = useRef()
//   //const submitHandler = (e)=>{
//   //e.preventDefault()
//   // let formeel = document.getElementById('postForm')
//   // const formdata = new FormData(postForm)
//   // console.log(formdata)
//   // const fieldName = e.target.value
//   // const value = e.target.value
//   //console.log(postForm.current.elements.name,formdata)
//   //formHandler(e)
//   //console.log(post)

//   //}
//   const formHandler = (e) => {
//     e.preventDefault();
//     const fieldName = e.target.name;
//     const value = e.target.value;
//     setPost({
//       ...post,
//       [fieldName]: value,
//     });
//   };
//   console.log(post);
//   return (
//     <form
//       className="form-group container w-50"
//       onSubmit={(e) => e.preventDefault()}
//       encType="multipart/orm-data"
//     >
//       <label>Body</label>
//       <textarea
//         className="form-control"
//         name="body"
//         value={post.body}
//         onChange={formHandler}
//       />

//       <label>Title</label>
//       <input
//         className="form-control"
//         type="text"
//         name="title"
//         value={post.title}
//         onChange={formHandler}
//       />

//       <label>userId</label>
//       <input
//         className="form-control"
//         type="text"
//         name="userId"
//         value={post.userId}
//         onChange={formHandler}
//       />

//       <button className="btn btn-primary form-control">submit</button>
//       <br />
//       {post.title}
//       {post.body}
//       {post.userId}
//     </form>
//   );
// }

// export default Form;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditPost2() {
  const {id} = useParams()
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
  const onEditPost = (e) => {
    e.preventDefault()
    console.log("updating post");
    axios
      .put(`http://localhost:8080/posts/${post.id}`, post)
      .then((responce) => console.log(responce.data));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${id}`)
      .then((res) => setPost(res.data));
  }, [id]);

  console.log(post);
  return (
    <div className='bg-dark-center'>
      <form
        className="form-group container w-50"
        // onSubmit={(e) => {
        //   e.preventDefault();
        // }}
        // encType="multipart/orm-data"
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
          defaultValue={post.userId}
          // onChange={formHandler}
        />
        <label>ID</label>
        <input
          type="number"
          name="id"
          defaultValue={post.id}
          // onChange={formHandler}
          className="form-control"
        />

        <button className="btn btn-primary form-control" onClick={onEditPost}>
          submit
        </button>
        {/* {post.title}
        {post.body}
        {post.userId}
        {post.id} */}
      </form>

      {/* <br /> */}
    </div>
  );
}

export default EditPost2;
