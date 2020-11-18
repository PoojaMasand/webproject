import React, {useState} from 'react';
import PostsApi from "../../api/PostsApi";

function ShowPost(posts) {
    console.log(posts);

    const handleDelete = (postData) => {
        console.log("inside handleDelete")
        console.log(posts.post.id)
        PostsApi.deletePost(posts.post.id)
            .then(() => window.location.reload())
    }

    return (
        <div className="card mt-4">
            <div className="card-body">
                {posts.post.textBody}

                <div className="form-group">
                    <button
                        className="btn btn-danger"
                        onClick={() => handleDelete({posts})}>

                        Delete
                    </button>

                </div>




            </div>
        </div>
    );
}

export default ShowPost;