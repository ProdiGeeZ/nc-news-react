import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getArticleComments } from '../../../../../api';
import PostComment from './PostComment';
import LoadingBar from '../../../base/LoadingBar';

function CommentsList({ article_id }) {
    const [comments, setComments] = useState([]);
    const [loadProgress, setLoadProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [messageOpacity, setMessageOpacity] = useState(0);

    const loadComments = () => {
        setIsLoading(true);
        setLoadProgress(45); 

        getArticleComments(article_id)
            .then((data) => {
                setComments(data.comments);
                setLoadProgress(100); 
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
                
            });
    };

    const handlePostComment = () => {
        setMessageOpacity(1)
        loadComments();
        setShowSuccessMessage(true);
        setTimeout(() => {
            setMessageOpacity(0); 
        }, 1000);

        setTimeout(() => {
            setShowSuccessMessage(false); 
        }, 1000); 
    
    };

    useEffect(() => {
        loadComments();
    }, [article_id]);

    return (
        <div className='comments-container'>
            {isLoading && <LoadingBar progress={loadProgress} />}
            {showSuccessMessage && <p className="success-message">Comment posted successfully!</p>}

            <div className="comments-section">
                <h2>Comments ({comments?.length ?? 0})</h2>
                <PostComment article_id={article_id} onPostComment={handlePostComment} />
                {comments?.length > 0 ? (
                    comments.map((comment) => (
                        <div className="comment" key={comment.comment_id}>
                            <h4>{comment.author}</h4>
                            <p className="comment-meta">{moment(comment.created_at).fromNow()}</p>
                            <p className="comment-body">{comment.body}</p>
                            <p className="comment-article-id">Posted on Article {comment.article_id}</p>
                            <p className="comment-karma">Karma ({comment.votes})</p>
                        </div>
                    ))
                ) : (
                    <p>Oh so empty...</p>
                )}
            </div>
        </div>
    );
}

export default CommentsList;
