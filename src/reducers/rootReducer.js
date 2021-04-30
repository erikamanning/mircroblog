import data from '../data.json'
import { ADD_POST, DELETE_POST, UPDATE_POST, SAVE_POSTS, ADD_COMMENT, DELETE_COMMENT } from './actionTypes'
// const INITIAL_POSTS = {posts:data.posts};
const INITIAL_POSTS = {posts:{}};

const rootReducer = (state=INITIAL_POSTS, action) =>{

    switch(action.type){

        // case ADD_POST:
        //     const nPost = {[action.payload.id]:action.payload.post};
        //     console.log("New Post: ",nPost);
        //     const mehState =  {...state, posts:{...state.posts, [action.payload.id]:action.payload.post}};
        //     console.log("mehState: ",mehState);
        //     return mehState;
        
        // case DELETE_POST:
        //     const newPosts = state.posts;
        //     delete newPosts[action.payload.id];
        //     return {...state, posts:newPosts};

        // case UPDATE_POST:
        //     const updatedPosts = state.posts;
        //     updatedPosts[action.payload.id] = action.payload.post;
        //     return {...state, posts:updatedPosts};

        case SAVE_POSTS:
            console.log("action.payload.posts",action.payload.posts)
            return {...state, posts:action.payload.posts};

        // case ADD_COMMENT:
        //     const post1 = state.posts[action.payload.postId];
        //     post1.comments= {...post1.comments,[action.payload.commentId]:action.payload.comment};
        //     return {...state, posts:{...state.posts,[action.payload.postId]:post1}};
        
        // case DELETE_COMMENT:
        //     const post2 = state.posts[action.payload.postId];
        //     delete post2.comments[action.payload.commentId];
        //     return {...state, posts:{...state.posts,[action.payload.postId]:post2}};

            default:
            return state;
    }
}

export default rootReducer;