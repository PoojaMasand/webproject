import React, {useEffect,useState} from 'react';

import PostsApi from "../../api/PostsApi";

function PostForm({onSubmit}) {
    const [textBody, setTextBody] = useState("");
    const [title, setTitle] = useState("");


    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Add Post</h4>
                <div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />

                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="What's on your mind?"
                            value={textBody}
                            onChange={e => setTextBody(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button
                            className="btn btn-info"
                            onClick={() => onSubmit({textBody,title})}>
                            Post
                        </button>
                    </div>
                </div>
            </div>


        </div>


    );
}

export default PostForm;