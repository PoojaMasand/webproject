import React, {useState} from 'react';

function PostForm({onSubmit}) {
    const [textBody, setTextBody] = useState("");
    const [textBody1, setTextBody1] = useState("");
   

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Add Post</h4>
                <div>
                    <div className="form-group">
                        <label>Recent Posts:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Post"
                            value={textBody}
                            onChange={e => setTextBody(e.target.value)} />
                               <label>Trending Posts Body:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Post1"
                            value={textBody1}
                            onChange={e => setTextBody1(e.target.value)} />
                    </div>



                    <div className="form-group">
                        <button
                            className="btn btn-info"
                            onClick={() => onSubmit({textBody,textBody1})}>
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostForm;