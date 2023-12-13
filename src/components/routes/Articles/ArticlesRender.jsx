import { Link } from "react-router-dom";
import moment from "moment";

function ArticlesRender({ articles }) {
    return (
        <div className="articles-list">
            {articles.map(article => (
                <div className="article-card" key={article.article_id}>
                    {article.article_img_url && (
                        <img className="article-image" src={article.article_img_url} alt={article.title} />
                    )}
                    <div className="article-content">
                        <Link to={`/articles/${article.article_id}`} className="article-link"><h3>{article.title}</h3></Link>
                        <p className="article-topic">Published in <span className="topic-span">{article.topic}</span></p>
                        <p className="article-date">Posted on {moment(article.created_at).format('Do MMM YY')}</p>
                        <p className="article-author">by {article.author}</p>
                        <p className="article-votes">Ratings ({article.votes})</p>
                        <p className="article-comments">Comments ({article.comment_count})</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ArticlesRender;
