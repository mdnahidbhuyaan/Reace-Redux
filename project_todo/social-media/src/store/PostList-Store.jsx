/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";




export const PostList = createContext({
      postList: [],
  addPost: () => {},
  deletePost: () => {},
});
// eslint-disable-next-line no-unused-vars
const postListReaducer = (currPostList,action)=>{
    return currPostList;
}


const PostListProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [postList, dispatchPostList] = useReducer(postListReaducer,DEFAULT_POSTLIST);
  const addPost = () => {};
  const deletePost = (postId) => {
    console.log(`delete post call for id: ${postId}`);
  };



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
const DEFAULT_POSTLIST = [
  {
  id:"1",
  title:"Go to Dhaka",
  body:"Visit the capital city of Bangladesh",
  reactions:2,
  userid:"user1",
  tags:["travel","city","bangladesh"]

},
  {
  id:"2",
  title:"i am pass",
  body:"pass my exam with good marks",
  reactions:10,
  userid:"user-12",
  tags:["exam","school","study"]

}
]

export default PostListProvider;
