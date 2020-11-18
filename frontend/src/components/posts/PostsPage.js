import React, {useEffect, useState} from "react";
import PostsApi from "../../api/PostsApi";
import PostForm from "./PostForm";
import ShowPost from "./ShowPost";
import TrendingPost from "./TrendingPost";
function PostsPage() {
    // call a REST API to show all the post .Depending on the no of post recieved ,populate the card div

    const [information, setInformation] = useState([]);
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

            PostsApi.createPost(postData)
                .then(response => console.log(response) )

    }
    return (
        <div>
             <PostForm onSubmit={createPost}/>
             <TrendingPost information={information}/>


        </div>
    );
}

export default PostsPage;