import { useEffect, useState } from "react";
import { endpoints } from '../../../../endpoints';
import ArticlesRender from "./ArticlesRender";
import LoadingBar from "../../base/LoadingBar";

function Articles() {
    const [articles, setArticles] = useState([]);
    const [loadProgress, setLoadProgress] = useState(0);
    const [showArticles, setShowArticles] = useState(false);

    useEffect(() => {
        setLoadProgress(15);
        const queryString = endpoints.articles;
        fetch(queryString)
            .then((response) => {
                setLoadProgress(50);
                return response.json();
            })
            .then((body) => {
                setArticles(body.articles);
                setLoadProgress(100);
                setTimeout(() => {
                    setLoadProgress(0);
                    setTimeout(() => {
                        setShowArticles(true);
                    }, 500); 
                }, 1250); 
            });
    }, []);

    return (
        <div>
            {loadProgress > 0 && <LoadingBar progress={loadProgress} />}
            <div className={`article-container ${showArticles ? 'visible' : ''}`}>
                {articles.length > 0 ? (
                    <ArticlesRender articles={articles} />
                ) : (
                    showArticles && <div>No articles found.</div>
                )}
            </div>
        </div>
    );
}

export default Articles;