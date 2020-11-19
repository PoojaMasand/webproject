    import React from "react";
import CommentForm from "../comments/CommentForm";
import Api from "../../api/Api";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

import CommentsApi from "../../api/CommentsApi";
import TrendingComments from "./TrendingComments";



function ChatPage(posts) {
console.log(posts)
    const { postId } = useParams();   
    const postdetails = posts.filter((post) => post.id.match(postId))[0];

    const {textBody, id, email} = postdetails;

    const [comments, setComments] = useState([]);
    
    const getAll = () => {
        CommentsApi.getAllComments()
        .then((response) => 
            setComments(response.data))
    };

    useEffect(() => {
      getAll();
        }, []);

  // call a REST API to show all the post .Depending on the no of post recieved ,populate the card div
        const createComment = (commentData) => {
        Api.post("/comments", commentData)
        .then(() => window.location.reload());
        };

    return (
        <div>
             <CommentForm onSubmit={createComment}/>
             <div className="mt-4">
                 <TrendingComments comments={comments}/>
             </div>
        </div>
    );
}

export default ChatPage;