import React, { useState } from "react";
import axios from "axios";
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
  console.log(posts)
  return (
    <div>
      <button onClick={onGetPost}>click to see all posts</button>
      {
        posts.map(post =>{
          return(
            <div key={post.id}>
              <h1>postId - {post.id}</h1>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default GetPost;
