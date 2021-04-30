import { ADD_POST, DELETE_POST, UPDATE_POST, SAVE_POSTS, ADD_COMMENT, DELETE_COMMENT } from './actionTypes'
import axios from "axios"

export function getPostsFromAPI() {
    return async function(dispatch) {
      let res = await axios.get('http://localhost:5000/api/posts');
      console.log("RES FROM API: ", res);

      const posts = {}
        for(let post in res.data){
            console.log('a post: ',res.data[post])
            posts[res.data[post]['id']]={...res.data[post]};
        }
        console.log('COPIED POSTS: ',posts);

      dispatch(savePosts(posts));
    };
}
  
function savePosts(posts) {
    return { type: SAVE_POSTS, payload:{posts} };
}

export function addPostWithAPI(data) {
    return async function(dispatch) {
      try{
          console.log('DATAAAAAAAA: ',data);
        let res = await axios.post('http://localhost:5000/api/posts',{title:data.title,description:data.description,body:data.body});
        console.log("POST RES FROM API: ", res)


        


        // dispatch(addPost(res.data));
      }
      catch(error){
          console.log("ERROR: ",error);
      }
    };
}
  


export const addPost = (id,post) => {

    console.log("****Post: ", post);

    return {
        type:ADD_POST,
        payload: {id,post}
    }
}

export const deletePost = (id,post) => {

    return {
        type:DELETE_POST,
        payload: { id,post}
    }
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
