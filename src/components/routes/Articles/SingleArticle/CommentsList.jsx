import moment from 'moment';
import { getArticleComments } from '../../../../../api';
import { useEffect, useState } from 'react';
import PostComment from './PostComment';

function CommentsList({ article_id }) {
    const [comments, setComments] = useState([]);

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
                            <h4>{comment.author}</h4>
                            <p className="comment-meta">{moment(comment.created_at).fromNow()}</p>
                            <p className="comment-body">{comment.body}</p>
                            <p className="comment-article-id">Posted on Article {comment.article_id}</p>
                            <p className="comment-karma">Karma ({comment.votes})</p>
                        </div>
                    ))
                ) : (
                    <>
                        <p>Oh so empty...</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default CommentsList;