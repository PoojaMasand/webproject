import React from "react";
import CommentForm from "../comments/CommentForm";
import Api from "../../api/Api";
import { useState, useEffect } from "react";
import Auth from "../../services/Auth";

function ChatPage() {
    const [items, setItems] = useState({});
    //Function used in implementation of 'fetch' call from API
  useEffect(() => {
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
  }, []);
  
  
    // call a REST API to show all the post .Depending on the no of post recieved ,populate the card div
        const createPost = (postData) => {

        Api.post("/comments", postData)
        .then(r => console.log(r) )
    }
    

    return (
        <div>
             <CommentForm onSubmit={createPost}/>
             <div className="card">
                 Comments: 
             </div>
        </div>
    );
}

export default ChatPage;