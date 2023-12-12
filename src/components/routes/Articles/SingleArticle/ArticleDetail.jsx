import { useEffect, useState } from "react";
import { getArticleById } from '../../../../../api'; 
import { LoadingBar } from "../../../index";
import { useParams } from "react-router-dom";
import SingleArticle from "./SingleArticle";
import CommentsList from "./CommentsList";

function ArticleDetail() {
    const [article, setArticle] = useState(null);
    const [loadProgress, setLoadProgress] = useState(0);
    const [showArticle, setShowArticle] = useState(false);
    const { article_id } = useParams();

    useEffect(() => {
        setLoadProgress(15);
        getArticleById(article_id)
            .then((data) => {
                if (data) {
                    setArticle(data.article);
                    setLoadProgress(100);
                    setTimeout(() => {
                        setLoadProgress(0);
                        setShowArticle(true);
                    }, 1000); 
                }
            })
    }, [article_id]);

    return (
        <div>
            {loadProgress > 0 && <LoadingBar progress={loadProgress} />}
            <div className={`article-container ${showArticle ? 'visible' : ''}`}>
                {article ? (
                    <SingleArticle article={article} />
                ) : (
                    showArticle && <div>No articles found.</div>
                )}
            </div>
            <CommentsList article_id={article_id}/>
        </div>
    );
}

export default ArticleDetail;