import React, { useEffect, useState } from 'react';
import { useUser } from '../../../../UserContext';
import { getArticleComments } from '../../../../../api';
import PostComment from './PostComment';
import DeleteButton from './DeleteButton';
import { SpinnerLoader } from '../../../base/SpinnerLoader';
import moment from 'moment/moment';

function CommentsList({ article_id }) {
    const [comments, setComments] = useState([]);
    const { User } = useUser();
    const currentUsername = User.username;
    const [isLoading, setIsLoading] = useState(true);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
    const [showDeleteFailure, setShowDeleteFailure] = useState(false);

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

    const handleDeleteComment = (commentId, status) => {
        if (status === false){
            setShowDeleteFailure(true);
            
            setTimeout(() => {
                setShowDeleteFailure(false);
            }, 4000);
        } else {
            setShowDeleteSuccess(true);
        setComments(comments.filter(comment => comment.comment_id !== commentId));
            setTimeout(() => {
                setShowDeleteSuccess(false);
            }, 2000);
        }
    };

    return (
        <div className='comments-container'>
            {showSuccessMessage && <p className="success-message">Comment posted successfully!</p>}
            {showFailureMessage && <p className="failure-message">Failed to post comment. Please try again later.</p>}
            {showDeleteSuccess && <p className="success-message">Comment deleted successfully!</p>}
            {showDeleteFailure && <p className="failure-message">Failed to delete comment. Please try again later.</p>}

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
                            <div className="comment-header">
                                <h4 className="comment-author">{comment.author}</h4>
                                <p className="comment-meta">{moment(comment.created_at).fromNow()}</p>
                            </div>
                            <p className="comment-body">{comment.body}</p>
                            <div className="comment-footer">
                                <p className="comment-karma">Karma ({comment.votes})</p>
                                {comment.author === currentUsername && (
                                    <DeleteButton comment_id={comment.comment_id} onDeleteComment={handleDeleteComment} />
                                )}
                            </div>
                        </div>
                    ))
                ) : (!isLoading && <p>No comments yet. Be the first to comment!</p>)}
            </div>
        </div>
    );
}

export default CommentsList;