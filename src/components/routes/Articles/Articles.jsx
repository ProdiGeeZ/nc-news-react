import { useEffect, useState } from "react";
import { getAllArticles } from '../../../../api';
import ArticlesRender from "./ArticlesRender";
import LoadingBar from "../../base/LoadingBar";
import { useLocation } from "react-router-dom";

function Articles() {
    const [articles, setArticles] = useState([]);
    const [loadProgress, setLoadProgress] = useState(0);
    const [showArticles, setShowArticles] = useState(false);
    const location = useLocation();

    const parseQueries = (search) => {
        if (!search) return {};
        return search.substring(1).split('&').reduce((params, param) => {
            const [key, value] = param.split('=');
            params[key] = value;
            return params;
        }, {});
    };

    useEffect(() => {
        const queryParams = parseQueries(location.search);
        setLoadProgress(15);
        getAllArticles(queryParams)
            .then((data) => {
                if (data) {
                    setArticles(data.articles);
                    setLoadProgress(100);
                    setTimeout(() => {
                        setLoadProgress(0);
                        setShowArticles(true);
                    }, 500);
                }
            })
            .catch((error) => {
                console.error("Error fetching articles:", error);
                setLoadProgress(0);
            });
    }, [location.search]);

    return (
        <div>
            {loadProgress > 0 && <LoadingBar progress={loadProgress} />}
            <div className={`article-container ${showArticles ? 'visible' : ''}`}>
                {articles.length > 0 ? (
                <div> 
                    <ArticlesRender articles={articles} />
                </div>
                ) : (
                    showArticles && <div>No articles found.</div>
                )}
            </div>
        </div>
    );
}

export default Articles;
