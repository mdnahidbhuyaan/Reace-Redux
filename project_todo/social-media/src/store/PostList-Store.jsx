import { createContext, useReducer } from "react";




const PostList = createContext({
      postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReaducer = (currPostList,action)=>{
    return currPostList;
}


const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReaducer,[]);
  const addPost = () => {};
  const deletePost = () => {};



  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
