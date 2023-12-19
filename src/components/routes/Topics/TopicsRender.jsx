import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles } from "../../../../api";

function TopicsRender({ topics }) {
    const [topics, setTopics] = useState();
    const [activeTopic, setActiveTopic] = useState('')
    const [articles, setArticles] = useState([])
    const [filteredArticles, setFilteredArticles] = useState([]);
    
    useEffect(() => {
        getAllArticles()
            .then((response) => {
            console.log(response);
            setArticles(response.articles);
        }).catch((error) => {
            console.log(error);
        });
        
    }, []);
    

    return (
        <div>
            <h1>in the process....</h1>
        </div>
    );
}

export default TopicsRender;

/* onclick => filterArticles(activeTopic)

//function filteredArticles => (activeTopic){
    setFilteredArticles( articles.filter (article.topic => activeTopic ) ) only render 6 topics
}

*/