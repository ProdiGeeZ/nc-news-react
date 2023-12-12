import { Link } from "react-router-dom";
import moment from "moment";

function ArticlesRender({ articles }) {
    return (
        <ul>
            {articles.map(article => (
                <div key={article.article_id}>
                    <Link to={`/articles/${article.article_id}`} ><h3>{article.title}</h3></Link>
                    <p>Topic: {article.topic}</p>
                    <p>Posted on {moment(article.created_at).format('MMMM Do YYYY, h:mm a')}</p>
                    {article.article_img_url && <img src={article.article_img_url} alt={article.title} />}
                    <p>Posted By {article.author}</p>
                    <p>Ratings ({article.votes})</p>
                    <p>Comments ({article.comment_count})</p>
                </div>
            ))}
        </ul>
    );
}

export default ArticlesRender;
