import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../../../../api";

function PostComment() {
    const [comment, setComment] = useState('');
    const { article_id } = useParams();

    const commentData = (event) => {
        event.preventDefault();
        if (comment.trim()) {
            postComment(article_id, comment)
                .then((response) => {
                    setComment('');
                    console.log(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <form onSubmit={commentData}>
            <input
                type="text"
                id="comment"
                name="comment"
                placeholder="Write a comment..."
                onChange={(event) => setComment(event.target.value)}
                value={comment}
            />
            <button type="submit">Post Comment</button> 
        </form>
    );
}

export default PostComment;
