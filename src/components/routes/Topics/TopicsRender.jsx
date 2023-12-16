import { Link } from "react-router-dom";

function TopicsRender({ topics }) {
    return (
        <div>
            <div className="topics-list">
                {topics.map((topic, index) => (
                    <div className="topic-card" key={index}>
                        <div className="topic-content">
                            <Link to={`/articles?topic=${topic.slug}`} className="topic-link">
                                <h3>{topic.slug}</h3>
                            </Link>
                            <p className="topic-description">{topic.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="topic-content">More Topics to come soon!</p>
        </div>
    );
}

export default TopicsRender;
