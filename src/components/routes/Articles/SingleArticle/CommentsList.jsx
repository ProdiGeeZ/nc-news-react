import moment from 'moment';
import { getArticleComments } from '../../../../../api';
import { useEffect, useState } from 'react';

function CommentsList({ article_id }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getArticleComments(article_id)
            .then((data) => {
                setComments(data.comments);
            })
    }, []);

    return (
    <div className='comments-container'>
        <div className="comments-section">
            <h2>Comments ({comments.length})</h2>
            {comments.map((comment) => (
                <div className="comment" key={comment.comment_id}>
                    <h4>{comment.author}</h4>
                    <p className="comment-meta">{moment(comment.created_at).startOf('day').fromNow()}</p>
                    <p className="comment-body">{comment.body}</p>
                    <p className="comment-article-id">Posted on Article {comment.article_id}</p>
                    <p className="comment-karma">Karma ({comment.votes})</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default CommentsList;