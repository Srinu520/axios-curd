
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function EditPost2() {
  const {id} = useParams()
  const history = useHistory()
  const [post, setPost] = useState({
    body: "",
    title: "",
    userId: "",
    id: "",
  });
  const [isUpdated, setIsUpdated] = useState()
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
      .then((responce) => {
        setIsUpdated(true)
        console.log(responce.data)
        setTimeout(()=>{
          history.push('/get')
        },3000)
      })
      .catch(error => {
        setIsUpdated(false)
      })
      setPost({
        ...post,
        body:'',
        title:'',
        userId:'',
        id:''
      })

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
        {isUpdated && 'updated succesfully'}
      </form>

      {/* <br /> */}
    </div>
  );
}

export default EditPost2;
