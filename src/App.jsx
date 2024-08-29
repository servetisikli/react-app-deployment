import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./views/Home";
import Authentication from "./views/Authentication";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Posts from "./views/Posts";
import CreatePost from "./views/CreatePost";
import Header from "./components/Header";
import PostDetails from "./components/PostDetails";
import AllPosts from "./components/AllPosts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="authentication" element={<Authentication />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registration />} />
          </Route>
          <Route path="posts" end element={<Posts />}>
            <Route index element={<AllPosts />} />
            <Route path="post-details/:postId" element={<PostDetails />} />
            <Route path="create-post" element={<CreatePost />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
