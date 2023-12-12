function SingleArticle({ article }) {
    return (
        <div key={article.article_id}>
            <h3>{article.title}</h3>
            <p>Topic: {article.topic}</p>
            <p>Posted on {new Date(article.created_at).toLocaleDateString()}</p>
            {article.article_img_url && <img src={article.article_img_url} alt={article.title} />}
            <p>{article.body}</p>
            <p>Posted By {article.author}</p>
            <p>Ratings ({article.votes})</p>
            <p>Comments ({article.comment_count})</p>
        </div>
    );
}

export default SingleArticle;