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
                    <h6>{comment.author}</h6>
                    <p>{comment.body}</p>
                    <p>{comment.votes}</p>
                    <p>{new Date(comment.created_at).toLocaleDateString()}</p>
                    <p style={{display: "none"}}>Posted on Article {comment.article_id}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentsList;