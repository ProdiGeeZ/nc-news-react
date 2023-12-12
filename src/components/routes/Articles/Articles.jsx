import { useEffect, useState } from "react";
import { getAllArticles } from '../../../../api';
import ArticlesRender from "./ArticlesRender";
import LoadingBar from "../../base/LoadingBar";

function Articles() {
    const [articles, setArticles] = useState([]);
    const [loadProgress, setLoadProgress] = useState(0);
    const [showArticles, setShowArticles] = useState(false);

    useEffect(() => {
        setLoadProgress(15);
        getAllArticles()
            .then((data) => {
                if (data) {
                    setArticles(data.articles);
                    setLoadProgress(100);
                    setTimeout(() => {
                        setLoadProgress(0);
                        setShowArticles(true);
                    }, 1000);
                }
            })
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
