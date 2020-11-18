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

    return (
        <div className="card text-white  bg-info mb-3 mb-3 mt-4">
            <div className="card-header">
                Posted By : {posts.post.email}
            </div>
            <div className="card-body">
                <h5 className="card-title">{posts.post.title}</h5>
                <p className="card-text">{posts.post.textBody}</p>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete({posts})}>

                    Delete
                </button>

            </div>
        </div>


    );
}

export default ShowPost;