import React, {useEffect,useState} from 'react';
import TrendingPost from "./TrendingPost";
import PostsApi from "../../api/PostsApi";

function PostForm({onSubmit}) {
    const [textBody, setTextBody] = useState("");


    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Add Post</h4>
                <div>
                    <div className="form-group">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={textBody}
                            onChange={e => setTextBody(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button
                            className="btn btn-info"
                            onClick={() => onSubmit({textBody})}>
                            Post
                        </button>
                    </div>
                </div>
            </div>


        </div>


    );
}

export default PostForm;