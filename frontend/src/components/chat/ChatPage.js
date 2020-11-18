import React from "react";
import CommentForm from "../comments/CommentForm";
import Api from "../../api/Api";
import { useState, useEffect } from "react";

import CommentsApi from "../../api/CommentsApi";
import TrendingComments from "./TrendingComments";



function ChatPage() {
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        CommentsApi.getAllComments()
        .then((response) => 
            setComments(response.data))
        }, []);




    //Function used in implementation of 'fetch' call from API
  /*useEffect(() => {
    const headers = new Headers();
    headers.append("Authorization", Auth.getAuthorizationHeader())

    const commentRequest = new Request('http://localhost:8080/comments', {
        method: 'GET',
        headers: headers,
    });
    fetch(commentRequest)
    .then((response) => {

       response.json().then((items)=> console.log(items))
    })
    .catch((error)=> console.error(error))
  }, []);*/
  


  
    // call a REST API to show all the post .Depending on the no of post recieved ,populate the card div
        const createComment = (commentData) => {
        Api.post("/comments", commentData)
        .then(r => console.log(r) )
    };
    

    return (
        <div>
             <CommentForm onSubmit={createComment}/>
             <div className="card">
                 <TrendingComments comments={comments}/>
             </div>
        </div>
    );
}

export default ChatPage;