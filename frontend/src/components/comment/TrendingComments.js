import CommentCard from "./CommentCard";

function TrendingComments({ comments, onCommentDelete }) {
  console.log("Inside Trending Comments" + comments);

  return (
    <div>
      <div>
        <a
          class="btn btn-danger mb-4"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          View Comments
        </a>
      </div>
      <div class="collapse" id="collapseExample">
        <div className="card card-body mt-4 mb-4 bg-dark text-light">
        <h3>Comments</h3>
        {comments.map((item) => (
          <CommentCard key={comments.id} comment={item} />
        ))}
      </div>
        
      </div>

    </div>
  );
}

export default TrendingComments;
