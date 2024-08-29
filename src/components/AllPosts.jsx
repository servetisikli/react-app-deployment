import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((singlePost) => {
            return (
              <tr>
                <td>
                  <Link to={`post-details/${singlePost.id}`}>
                    {singlePost.id}
                  </Link>
                </td>
                <td>{singlePost.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default AllPosts;
