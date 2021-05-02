import { ADD_POST, DELETE_POST, UPDATE_POST, SAVE_POSTS, UP_VOTE, DOWN_VOTE  } from '../actions/actionTypes'

const INITIAL_POSTS = {posts:{}};

const postReducer = (state=INITIAL_POSTS, action) =>{

    switch(action.type){

        case ADD_POST:
            return {...state, posts:{...state.posts, [action.payload.id]:action.payload.post}};
        
        case DELETE_POST:
            const newPosts = {...state.posts};
            delete newPosts[action.payload.id];
            return {...state, posts:newPosts};;

        case UPDATE_POST:
            const updatedPosts = {...state.posts};
            updatedPosts[action.payload.id] = action.payload.post;
            return {...state, posts:updatedPosts};

        case SAVE_POSTS:
            return {...state, posts:action.payload.posts};

        case UP_VOTE:
            const uvotePost = {...state.posts[action.payload.postId]};
            uvotePost['votes'] = uvotePost['votes']+1;
            return {...state, posts:{...state.posts, [action.payload.postId]:uvotePost}};

        case DOWN_VOTE:
            const dvotePost = {...state.posts[action.payload.postId]};
            dvotePost['votes'] = dvotePost['votes']-1;
            return {...state, posts:{...state.posts, [action.payload.postId]:dvotePost}};

        default:
        return state;
    }
}

export default postReducer;