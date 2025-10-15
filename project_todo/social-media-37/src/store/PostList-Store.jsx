/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
// eslint-disable-next-line no-unused-vars
const postListReaducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if(action.type === "ADD_POST"){
     newPostList = [ action.payload,...currPostList, ]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [postList, dispatchPostList] = useReducer(
    postListReaducer,
    DEFAULT_POSTLIST
  );
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userid: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
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
    id: "1",
    title: "Go to Dhaka",
    body: "Visit the capital city of Bangladesh",
    reactions: 2,
    userid: "user1",
    tags: ["travel", "city", "bangladesh"],
  },
  {
    id: "2",
    title: "i am pass",
    body: "pass my exam with good marks",
    reactions: 10,
    userid: "user-12",
    tags: ["exam", "school", "study"],
  },
];

export default PostListProvider;
