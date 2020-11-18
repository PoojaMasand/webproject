import React, {useState} from 'react';

function ShowPost(posts) {
    console.log(posts);
    return (
        <div className="card">
            <div className="card-body">

                <div>
                    <div className="form-group">

                        {posts.post.textBody}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default ShowPost;