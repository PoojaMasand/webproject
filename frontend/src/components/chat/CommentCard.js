import React from 'react';

function CommentCard(comments) {
    console.log(comments);


    return (
        <div className="card mt-4">
            <div className="card-body">

                <div>
                    <div className="form-group">
                    body: {comments.comment.body}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CommentCard;