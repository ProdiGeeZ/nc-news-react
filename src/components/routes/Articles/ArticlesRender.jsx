function ArticlesRender({ articles }) {
    return (
        <ul>
            {articles.map(article => (
                <li key={article.article_id}>
                    <div>
                        <h3>{article.title}</h3>
                        {article.article_img_url && <img src={article.article_img_url} alt={article.title} />}
                        <p>Author: {article.author}</p>
                        <p>Topic: {article.topic}</p>
                        <p>Date: {new Date(article.created_at).toLocaleDateString()}</p>
                        <p>Votes: {article.votes}</p>
                        <p>Comments: {article.comment_count}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ArticlesRender;
