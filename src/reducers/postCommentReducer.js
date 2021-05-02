import { ADD_COMMENT, DELETE_COMMENT, SAVE_COMMENTS  } from '../actions/actionTypes'

const INITIAL_POST_COMMENTS = {postComments:{}};

const postCommentReducer = (state=INITIAL_POST_COMMENTS, action) =>{

    switch(action.type){

        case SAVE_COMMENTS:
            return  {
                        ...state, 
                        postComments: {
                            ...state.postComments,
                            [action.payload.postId]:{...action.payload.comments}
                        } 
                    };

        case ADD_COMMENT:
            return  {
                        ...state, 
                        postComments:{
                            ...state.postComments,
                            [action.payload.postId]:{
                                ...state.postComments[action.payload.postId],
                                [action.payload.commentId]:{
                                    id:action.payload.commentId,
                                    text:action.payload.comment
                                }
                            }
                        }
                    }

        case DELETE_COMMENT:
                    
            const postComments = {...state.postComments[action.payload.postId]};
            delete postComments[action.payload.commentId];
            return {...state, postComments:{...state.postComments,[action.payload.postId]:postComments}};

        default:
        return state;
    }
}

export default postCommentReducer;