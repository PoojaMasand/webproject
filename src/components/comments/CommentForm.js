import React, {useState} from 'react';
import Api from '../../api/Api';

function CommentForm() {
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    //sending data to the back end....
    const onSubmit=()=> 
    {
    const requestBody={body,author};
    Api.post("/posts",requestBody)
    .then((r) => console.log(r));

    };



    


    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Add Comment</h4>
                <div>
                    <div className="form-group">
                        <label>Body of the Comment:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Comment Body"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                            <label>Author of the Comment:</label>
                        <textarea
                            className="form-control"
                            placeholder="author comment"
                            value={author}
                            onChange={e => setAuthor(e.target.value)} />
                    </div>



                    <div className="form-group">
                        <button
                            className="btn btn-info"
                            onClick={() => onSubmit({body,author})}>
                            Comment Information....
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentForm;