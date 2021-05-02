import React, {useState, useContext} from "react"
import { useDispatch } from "react-redux"
import { PostContext } from '../Post/Post'
import { addCommentWithAPI } from '../../actions/postCommentActions'

const CommentForm = () => {

    const {postId} = useContext(PostContext);
    const dispatch = useDispatch();

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
        
        // add post to reducer
        dispatch(addCommentWithAPI(postId,formData.text));

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