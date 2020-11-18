import React from 'react';
import CommentsApi from "../../api/CommentsApi";


function CommentCard(comments) {


    const handleDelete = (commentData) => {
        console.log("inside handleDelete")
        console.log(commentData.id)
        CommentsApi.deleteComment(comments.comment.id)
            .then(() => window.location.reload())
    };
  
    return (
        <div className="card mt-4">
            <div className="card-body">

                <div>
                    <div className="form-group">
                    body: {comments.comment.body}
                    </div>
                    <div>
                        <button className="btn btn-danger" 
                        onClick={() => handleDelete({comments})}>
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CommentCard;