import React, {useEffect, useState} from "react";
import PostsApi from "../../api/PostsApi";
import PostForm from "./PostForm";
import ShowPost from "./ShowPost";


function PostsPage() {
    // call a REST API to show all the post .Depending on the no of post recieved ,populate the card div
    const [information, setInformation] = useState([]);
    const [currentUser, setCurrentUser] = useState("");


    const viewPosts = () => {
        PostsApi.getAllPosts()
            .then(response => {

                setInformation(response.data);
            })
    }
    useEffect(() => {
        viewPosts();


    }, []);

    const createPost = (postData) => {
        console.log("Data" + postData.textBody)
        PostsApi.createPost(postData)
            .then(res => setInformation([...information, res.data]));
    }




    return (
        <div>
            <PostForm onSubmit={createPost}/>

            <h1>Trending Posts  <small class="text-muted">See what the forums been munching</small></h1>

            {information.map(item => (<ShowPost  key={item.id} post={item}/>))}
        </div>
    );

}
export default PostsPage;