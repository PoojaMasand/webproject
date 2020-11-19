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
        console.log(id)
        PostsApi.deletePost(posts.post.id)
            .then(() => window.location.reload())
    }

    
    return (
        <div>
           
        <div className="card text-white  bg-info mb-3 mb-3 mt-4">
            <div className="card-header ">
                Posted By : {posts.post.email}

                <button
                    className=" float-right btn btn-light btn-sm"
                    onClick={() => handleDelete({posts})}>

                    Delete
                </button>
            </div>
            <div className="card-body">
                <h5 className="card-title">{posts.post.title}</h5>
                <p className="card-text">{posts.post.textBody}</p>

            </div>
            <Link className="link" to={`/postdetails/${id}`}>
            <div>
                <button className="btn btn-info">Add Comment <i className='far fa-comment-dots'></i></button>
            </div>
            </Link>
        </div>
        
        </div>



    );
}

export default ShowPost;