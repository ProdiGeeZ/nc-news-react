import { useEffect, useState } from "react";
import { getAllTopics } from "../../../../api";
import TopicsRender from "./TopicsRender";
import LoadingBar from "../../base/LoadingBar";

function Topics() {
    const [topics, setTopics] = useState([]);
    const [loadProgress, setLoadProgress] = useState(0);
    const [showTopics, setShowTopics] = useState(false);

    useEffect(() => {
        setLoadProgress(15);
        getAllTopics()
            .then((data) => {
                if (data) {
                    setTopics(data);
                    setLoadProgress(100);
                    setTimeout(() => {
                        setLoadProgress(0)
                        setShowTopics(true);
                    }, 500);
                }
            })
    }, []);
    
    return (
        <div>
            {loadProgress > 0 && <LoadingBar progress={loadProgress} />}
            <div className={`topics-container ${showTopics ? 'visible' : ''}`}>
                {topics.length > 0 ? (
                    <TopicsRender topics={topics} />
                ) : (
                    showTopics && <div>No topics found.</div>
                )}
            </div>
        </div>
    );
}

export default Topics;