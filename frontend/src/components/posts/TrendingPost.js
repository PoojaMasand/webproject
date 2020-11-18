import React, {useEffect, useState} from 'react';
import ShowPost from "./ShowPost";


function TrendingPost(information) {

    console.log("Inside TrendingPost" + information.information)

    return (


                <div className="mt-4">
                    <h1>Trending Posts</h1>

                    { information.information.map((item) => <ShowPost post={item}/>)}



                </div>

    );
}

export default TrendingPost;