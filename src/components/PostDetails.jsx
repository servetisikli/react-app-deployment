import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const [details, setDetails] = useState({});
  console.log(useParams());

  const { postId } = useParams();
  useEffect(() => {
    //   console.log("current location", location.pathname.split("/")[3]);
    // const postId = location.pathname.split("/")[3];
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((postData) => setDetails(postData));
  }, []);
  return (
    <div>
      <p>Creator ID : {details.userId} </p>
      <p>Post ID : {details.id}</p>
      <p>Post Title : {details.title}</p>
      <p>Post Contents : {details.body}</p>
    </div>
  );
}

export default PostDetails;
