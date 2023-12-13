import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { patchArticleVote } from '../../../../../api'; 

function ArticleVotes({ initialVoteCount }) {
    const [voteCount, setVoteCount] = useState(initialVoteCount);
    const { article_id } = useParams();

    const handleVote = (voteChange) => {
        setVoteCount(voteCount + voteChange);
        patchArticleVote(article_id, voteChange)
            .then(data => {
                console.log(`Vote updated for Article ${article_id}:`, data);
            })
    };

    return (
        <div>
            <div>Article Rating</div>
            ({voteCount})
            <div>
                <button onClick={() => handleVote(1)}>Upvote</button>
                <button onClick={() => handleVote(-1)}>Downvote</button>
            </div>
        </div>
    );
}

export default ArticleVotes;
