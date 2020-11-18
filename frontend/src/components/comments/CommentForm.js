import React, {useState} from 'react';

function CommentForm({onSubmit}) {
    const [body, setBody] = useState("");


    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Add Comment</h4>
                <div>
                    <div className="form-group">
                        <label>Body:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>



                    <div className="form-group">
                        <button
                            className="btn btn-info"
                            onClick={() => onSubmit({body})}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentForm;