import React, {useState,useEffect} from 'react';
import CommentsApi from "../../api/CommentsApi";
import PostsApi from "../../api/PostsApi";



function CommentCard(comments) {
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        getEmailOfUser();

    }, []);

    const getEmailOfUser = () => {
        CommentsApi.getCurrentUser()
            .then(response => {
                console.log("Email of the logged in user" + response.data.email)
                setCurrentUser(response.data.email);
            })
    }

    const handleDelete = (commentData) => {
        console.log("inside handleDelete")
        console.log(commentData.id)
        CommentsApi.deleteComment(comments.comment.id)
            .then(() => window.location.reload())
    };
  
    return (
        <div className="card mt-4  bg-dark">
                    <div className="card text-white bg-dark mb-3 mb-3 mt-4">
                    {comments.comment.body}
                    <div>
                        <div>
                    Posted By : {comments.comment.email}
                    </div>
                        {currentUser === comments.comment.email ?
                        <button className="btn btn-danger mt-4" 
                        onClick={() => handleDelete({comments})}>
                            Delete
                        </button>

                        : null}
                    </div>

                
            </div>
        
        </div>
    );
}

export default CommentCard;