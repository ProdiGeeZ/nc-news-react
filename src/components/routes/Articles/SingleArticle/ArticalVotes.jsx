import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { patchArticleVote } from '../../../../../api';

function ArticleVotes({ initialVoteCount }) {
    const [voteCount, setVoteCount] = useState(initialVoteCount);
    const [userVote, setUserVote] = useState(null); 
    const { article_id } = useParams();

    const handleVote = (voteType) => {
        let voteChange = 0;
        if (userVote === voteType) {
            voteChange = voteType === 'upvote' ? -1 : 1;
            setUserVote(null);
        } else {
            voteChange = voteType === 'upvote' ? 1 : -1;
            if (userVote) {
                voteChange *= 2;
            }
            setUserVote(voteType);
        }
        setVoteCount(voteCount + voteChange);
        patchArticleVote(article_id, voteChange)
            .then(data => {
                console.log(`Vote updated for Article ${article_id}:`, data);
            })
            .catch((error) => {
                console.log(`Error adding vote for Article ${article_id}`, error);
                setVoteCount(voteCount);
                setUserVote(userVote === voteType ? null : userVote);
            });
    };

    return (
        <div>
            <div>Article Rating ({voteCount})</div>
            <div>
                <button onClick={() => handleVote('upvote')}>
                    Upvote {userVote === 'upvote' ? '(selected)' : ''}
                </button>
                <button onClick={() => handleVote('downvote')}>
                    Downvote {userVote === 'downvote' ? '(selected)' : ''}
                </button>
            </div>
        </div>
    );
}

export default ArticleVotes;