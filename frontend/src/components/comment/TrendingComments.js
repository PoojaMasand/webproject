import CommentCard from "./CommentCard"

function TrendingComments({comments, onCommentDelete}) {

    console.log("Inside Trending Comments" + comments)

    return (
    <div className="card mt-4 mb-4 bg-dark text-light">
            <h3>Comments</h3>
                    {comments.map((item) => <CommentCard key={comments.id} comment = {item} />)}
        </div>

    );
}

export default TrendingComments;