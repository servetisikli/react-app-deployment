import React from "react";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <p>I am responisble to render all the posts that are available</p>
      <Outlet />
    </>
  );
}

export default Posts;
