import React from "react";
import CommentForm from "../comment/CommentForm";
import Api from "../../api/Api";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

import CommentsApi from "../../api/CommentsApi";
import TrendingComments from "./TrendingComments";
import PostsApi from "../../api/PostsApi";
import { Jumbotron } from "react-bootstrap";



function PostDetails(match) {

    const [comments, setComments] = useState([]);
    const [postId, setPostId] = useState(match.match.params.id);
    const [post, setPost] = useState([]);

    const getAll = () => {
        CommentsApi.getCommentByPostId(postId)
        .then((response) => 
            setComments(response.data))
    };

    useEffect(() => {
      getAll();
      getPostById();
        }, []);

    const getPostById = () => {
        PostsApi.getPostById(postId)
        .then((response) => 
        {setPost(response.data)
        console.log(response.data)})
    };

    console.log("test test test" + post.textBody)




  // call a REST API to show all the post .Depending on the no of post recieved ,populate the card div
        const createComment = (commentData) => {
       console.log("inside ccreateComment" + commentData)
           CommentsApi.createComment(commentData)
        .then(() => window.location.reload());
        };
        

    return (
        <div>
            <Jumbotron>
            <h4 className="text-center mb-4">{post.title}</h4>
            <p>{post.textBody}</p>
            <div className="card-header">
                Posted By : {post.email}
                </div>
            </Jumbotron>
             <CommentForm postNum= {postId} onSubmit={createComment}/>
             <div className="mt-4">
                 <TrendingComments comments={comments}/>
             </div>
        </div>
    );
}

export default PostDetails;