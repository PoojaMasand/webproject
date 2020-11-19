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
                    <div className="form-group">
                    <div className="card text-white  bg-info mb-3 mb-3 mt-4">
                    <div className="card-header ">
                    Posted By : {comments.comment.email}
                    </div>
                    body: {comments.comment.body}
                    <div>
                        <button className="btn btn-danger mt-4" 
                        onClick={() => handleDelete({comments})}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default CommentCard;