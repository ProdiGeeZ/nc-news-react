import moment from "moment";
import ArticalVotes from "./ArticalVotes";

function SingleArticle({ article }) {
    return (
        <div className="article-view">
            <div key={article.article_id}>
                <p className="article-author">Published by <span className="topic-span">{article.author}</span></p>
                <ArticalVotes initialVoteCount={article.votes} />
                <h3>{article.title}</h3>
                <p className="topic">Published in <span className="topic-span">{article.topic}</span></p>
                <p className="article-date">Posted {moment(article.created_at).startOf('day').fromNow()}</p>
                {article.article_img_url && <img src={article.article_img_url} alt={article.title} />}
                <p className="article-body">{article.body}</p>
            </div>
        </div>
    );
}

export default SingleArticle;
