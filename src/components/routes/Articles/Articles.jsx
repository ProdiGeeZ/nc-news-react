import { useEffect, useState } from "react";
import { endpoints } from '../../../../endpoints'
import ArticlesRender from "./ArticlesRender";

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const queryString = endpoints.articles;
        fetch(queryString)
        .then((response) => {
            return response.json()
        })
            .then((body) => {
            setArticles(body.articles)
        })
        
    }, [articles]);


    return (
        <>
            <ArticlesRender articles={articles}/>
        </>
    )
}

export default Articles;