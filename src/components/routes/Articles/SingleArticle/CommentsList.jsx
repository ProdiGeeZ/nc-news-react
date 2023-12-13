import { useUser } from '../../../../UserContext';
import { getArticleComments } from '../../../../../api';
import { useEffect, useState } from 'react';
import moment from 'moment';
import PostComment from './PostComment';
import DeleteButton from './DeleteButton';

function CommentsList({ article_id }) {
    const [comments, setComments] = useState([]);
    const { User } = useUser();
    const currentUsername = User.username;

    const loadComments = () => {
        getArticleComments(article_id)
            .then((data) => {
                setComments(data.comments);
            });
    };

    useEffect(() => {
        loadComments();
    }, [article_id]);

    return (
        <div className='comments-container'>
            <div className="comments-section">
                <h2>Comments ({comments?.length ?? 0})</h2>
                <PostComment article_id={article_id} onPostComment={loadComments} />
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
                                    <DeleteButton comment_id={comment.comment_id} onDeleteComment={loadComments} />
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </div>
    );
}

export default CommentsList;