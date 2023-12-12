import moment from "moment";
import ArticalVotes from "./ArticalVotes";

function SingleArticle({ article }) {
    return (
        <div key={article.article_id}>
            <h3>{article.title}</h3>
            <p>Topic: {article.topic}</p>
            <p>Posted {moment(article.created_at).startOf('day').fromNow()}</p>
            {article.article_img_url && <img src={article.article_img_url} alt={article.title} />}
            <p>{article.body}</p>
            <p>Posted By {article.author}</p>
            <ArticalVotes initialVoteCount={article.votes}/>
        </div>
    );
}

export default SingleArticle;
