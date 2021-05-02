import { ADD_POST, DELETE_POST, UPDATE_POST, SAVE_POSTS, ADD_COMMENT, DELETE_COMMENT } from './actionTypes'
import axios from "axios"

export function getPostsFromAPI() {
    return async function(dispatch) {
      let res = await axios.get('http://localhost:5000/api/posts');

      const posts = {}
        for(let post in res.data){
            posts[res.data[post]['id']]={...res.data[post]};
        }

      dispatch(savePosts(posts));
    };
}
  
function savePosts(posts) {
    return { type: SAVE_POSTS, payload:{posts} };
}

export function addPostWithAPI(data) {
    return async function(dispatch) {
      try{
        let res = await axios.post('http://localhost:5000/api/posts',{title:data.title,description:data.description,body:data.body});
        dispatch(addPost(res.data.id,res.data));
      }
      catch(error){
          console.log("ERROR: ",error);
      }
    };
}

export const addPost = (id,post) => {

    return {
        type:ADD_POST,
        payload: {id,post}
    }
}

export function deletePostWithAPI(postId) {
    return async function(dispatch) {
      try{
          console.log('deletePostWithAPI -- PostId: ',postId);
        let res = await axios.delete(`http://localhost:5000/api/posts/${postId}`);
        console.log("deletePostWithAPI -- POST RES FROM API: ", res);
        // if(res.data.message==='deleted')
        dispatch(deletePost(postId));
      }
      catch(error){
          console.log("ERROR: ",error);
      }
    };
}

export const deletePost = (id) => {

    return {
        type:DELETE_POST,
        payload: { id }
    }
}

export function updatePostWithAPI(postId,postData) {
    return async function(dispatch) {
      try{
          console.log('updatePostWithAPI -- PostId: ',postId);
        let res = await axios.put(`http://localhost:5000/api/posts/${postId}`,{title: postData.title, description: postData.description, body: postData.body});
        console.log("updatePostWithAPI -- POST RES FROM API: ", res);
        dispatch(updatePost(postId, postData));
      }
      catch(error){
          console.log("ERROR: ",error);
      }
    };
}
export const updatePost = (id,post) => {

    return {
        type:UPDATE_POST,
        payload: { id,post}
    }
}

export const addComment = (postId,commentId,comment) => {

    return {
        type:ADD_COMMENT,
        payload: {postId,commentId,comment }
    }
}

export const deleteComment = (postId, commentId) => {

    console.log("del comment: post id: ", postId)

    return {
        type:DELETE_COMMENT,
        payload: { postId,commentId }
    }
}
