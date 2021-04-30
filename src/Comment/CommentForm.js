import React, {useState, useContext} from "react"
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import { addComment } from '../reducers/actions'
import { PostContext } from '../Post/Post'
import { useHistory } from "react-router-dom"

const CommentForm = () => {

    const {postId} = useContext(PostContext);
    const dispatch = useDispatch();
    const posts = useSelector(state=>state.posts);
    const post = posts[postId];


    const INITIAL_FORM_DATA = {
        text:''
    };
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleChange = (evt) => {

        const {name,value} = evt.target;

        setFormData(data=>({
            ...data,
            [name]:value
        }));
    }
    const handleSubmit = (evt) => {

        evt.preventDefault();
        console.log("Form Submitted");
        
        // add post to reducer
        dispatch(addComment(postId,uuidv4(),formData));

        // clear form
        setFormData(INITIAL_FORM_DATA);

    }

    return  <div className=''>
                <form onSubmit={handleSubmit} className='text-left'>
                    <div className="form-group">
                        <label htmlFor="text"></label>
                        <input value={formData.text} name='text' onChange={handleChange} type="text" className="form-control" id="text" aria-describedby="title" placeholder="New Comment"/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
}

export default CommentForm;