import React from "react";
import CommentForm from "../comments/CommentForm";
import Api from "../../api/Api";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

import CommentsApi from "../../api/CommentsApi";
import TrendingComments from "./TrendingComments";



function PostDetails(match) {

    const [comments, setComments] = useState([]);
    const [postId, setPostId] = useState(match.match.params.id)
    
    const getAll = () => {
        CommentsApi.getCommentByPostId(postId)
        .then((response) => 
            setComments(response.data))
    };

    useEffect(() => {
      getAll();
        }, []);

  // call a REST API to show all the post .Depending on the no of post recieved ,populate the card div
        const createComment = (commentData) => {
       console.log("inside ccreateComment" + commentData)
           CommentsApi.createComment(commentData)
        .then(() => window.location.reload());
        };
        
console.log("this is painful" + postId)
    return (
        <div>
             <CommentForm postNum= {postId} onSubmit={createComment}/>
             <div className="mt-4">
                 <TrendingComments comments={comments}/>
             </div>
        </div>
    );
}

export default PostDetails;