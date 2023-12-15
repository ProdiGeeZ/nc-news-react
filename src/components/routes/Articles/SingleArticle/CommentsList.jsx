import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getArticleComments } from '../../../../../api';
import PostComment from './PostComment';
import { SpinnerLoader } from '../../../base/SpinnerLoader';

function CommentsList({ article_id }) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const loadComments = () => {
        setIsLoading(true);

        getArticleComments(article_id)
            .then((data) => {
                setComments(data.comments);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handlePostComment = (newComment, isSuccess) => {
        if (isSuccess) {
            setShowSuccessMessage(true);
            setComments(prevComments => [newComment, ...prevComments]);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 2000);
        } else {
            setShowFailureMessage(true);
            
            setTimeout(() => {
                setShowFailureMessage(false);
            }, 4000);
        }
    };

    useEffect(() => {
        loadComments();
    }, [article_id]);

    return (
        <div className='comments-container'>
            {showSuccessMessage && <p className="success-message">Comment posted successfully!</p>}
            {showFailureMessage && <p className="failure-message">Failed to post comment. Please try again later.</p>}

            <div className="comments-section">
                <h2>Comments ({comments?.length ?? 0})</h2>
                {isLoading ? (
                    <SpinnerLoader />
                ) : (
                    <PostComment article_id={article_id} onPostComment={handlePostComment} />
                )}

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
                    !isLoading && <p>No comments yet. Be the first to comment!</p>
                )}
            </div>
        </div>
    );

}

export default CommentsList;
