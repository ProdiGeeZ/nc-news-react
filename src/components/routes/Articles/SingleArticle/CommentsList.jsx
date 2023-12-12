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
        <div>
            <h2>Comments ({comments.length})</h2>
            {comments.map((comment) => (
                <div key={comment.comment_id}>
                    <h4>{comment.author}</h4>
                    <p>{moment(comment.created_at).startOf('day').fromNow()}</p>
                    <p>{comment.body}</p>
                    <p style={{display: "none"}}>Posted on Article {comment.article_id}</p>
                    <p>Karma ({comment.votes})</p>
                </div>
            ))}
        </div>
    )
}

export default CommentsList;