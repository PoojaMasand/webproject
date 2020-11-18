import React from "react";
import PostsApi from "../../api/PostsApi";
import PostForm from "./PostForm";



function CommentForm() {
    // call a REST API to show all the post .Depending on the no of post recieved ,populate the card div
    const createPost = (postData) => {

            PostsApi.createPost(postData)
                .then(response => console.log(response) )

    }
    return (
        <div>
             <PostForm onSubmit={createPost}/>
        </div>
    );
}


export default CommentForm;