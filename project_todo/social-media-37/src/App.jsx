import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/postList-Store";

const App = () => {

  const [activeTab, setActiveTab] = useState("Home");
  useState("Home");
  return (
    <>
    <PostListProvider>
      <div className="app-container">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="content">
          <Header />
          {activeTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
</PostListProvider>
    </>
  );
};

export default App;
