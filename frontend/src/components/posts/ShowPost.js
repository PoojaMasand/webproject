import React, {useState,useEffect} from 'react';
import PostsApi from "../../api/PostsApi";
import ChatPage from "../comment/PostDetails";
import {Link} from "react-router-dom";
import {Jumbotron} from 'react-bootstrap';

//Function
function ShowPost(posts , {user}) {
   console.log("In Show post" + {user});
   const { textBody, id, } = posts.post;
   const [currentUser, setCurrentUser] = useState("");

    //const { textBody, id, } = posts;

    //Delete method
    const handleDelete = (postData) => {
        console.log("inside handleDelete")
        console.log(id)
        PostsApi.deletePost(posts.post.id)
            .then(() => window.location.reload())
    }

    const getEmailOfUser = () => {
        PostsApi.getCurrentUser()
            .then(response => {
                console.log("Email of the logged in user" + response.data.email)
                setCurrentUser(response.data.email);
            })
    }

    useEffect(() => {
        getEmailOfUser();

    }, []);
    return (
        <div>
           
        <div className="container">
            <Jumbotron>
            
            <div className="card-body">
                <h4 className="text-center mb-4">{posts.post.title}</h4>
                <p className="text-center">{posts.post.textBody}</p>

            </div>
            <Link className="link" to={`/postdetails/${id}`}>
            <div>
                <button className="btn btn-outline-light">Add Comment <i className='far fa-comment-dots'></i></button>
            </div>
            </Link>
            <div className="card-header">
                Posted By : {posts.post.email}

                {currentUser === posts.post.email ?
                <button
                    className=" float-right btn btn-light btn-sm"
                    onClick={() => handleDelete({posts})}>
                    Delete
                </button>
                    : null}
            </div>
            </Jumbotron>
        </div>
        
        </div>



    );
}

export default ShowPost;