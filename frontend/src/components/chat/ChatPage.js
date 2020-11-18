    import React from "react";
import CommentForm from "../comments/CommentForm";
import Api from "../../api/Api";
import { useState, useEffect } from "react";

import CommentsApi from "../../api/CommentsApi";
import TrendingComments from "./TrendingComments";



function ChatPage() {
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