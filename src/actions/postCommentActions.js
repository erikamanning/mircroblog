
import { SAVE_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from './actionTypes'
import axios from "axios"

export function getCommentsFromAPI(postId) {
    return async function(dispatch) {
      let res = await axios.get(`http://localhost:5000/api/posts/${postId}/comments`);

      const comments = {}
        for(let comment in res.data){
            comments[res.data[comment]['id']]={...res.data[comment]};
        }
      dispatch(saveComments(postId,comments));
    };
}
  
function saveComments(postId,comments) {
    return { type: SAVE_COMMENTS, payload:{postId, comments} };
}

export function addCommentWithAPI(postId,commentText) {
    return async function(dispatch) {
      try{
        let res = await axios.post(`http://localhost:5000/api/posts/${postId}/comments`,{id:postId, text: commentText});
        dispatch(addComment(postId, res.data.id, commentText));
      }
      catch(error){
          console.log("ERROR: ",error);
      }
    };
}

export const addComment = (postId,commentId,comment) => {

    return {
        type:ADD_COMMENT,
        payload: {postId,commentId,comment }
    }
}

export function deleteCommentWithAPI(postId,commentId) {
    return async function(dispatch) {
      try{
        await axios.delete(`http://localhost:5000/api/posts/${postId}/comments/${commentId}`);
        dispatch(deleteComment(postId, commentId));
      }
      catch(error){
          console.log("ERROR: ",error);
      }
    };
}
export const deleteComment = (postId, commentId) => {

    return {
        type:DELETE_COMMENT,
        payload: { postId,commentId }
    }
}
