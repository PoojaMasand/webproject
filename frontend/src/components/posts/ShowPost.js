import React, {useState} from 'react';
import PostsApi from "../../api/PostsApi";
import ChatPage from "../chat/PostDetails";
import {Link} from "react-router-dom";


//Function
function ShowPost(posts) {

    const { textBody, id, } = posts.post;
    //const { textBody, id, } = posts;

    //Delete method
    const handleDelete = (postData) => {
        console.log("inside handleDelete")
        console.log(posts.post.id)
        PostsApi.deletePost(posts.post.id)
            .then(() => window.location.reload())
    }

    
    return (
        <article>
        <Link className="link" to={`/postdetails/${id}`}>

        <div className="card mt-4">
            <div className="card-body">
                text: {posts.post.textBody}

                <div className="form-group">
                    <button
                        className="btn btn-danger"
                        onClick={() => handleDelete({posts})}>

                        Delete
                    </button>

                </div>




            </div>
        </div>
        </Link>
        </article>
    );
}

export default ShowPost;