import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../../../../api";

function PostComment({onPostComment}) {
    const [comment, setComment] = useState('');
    const { article_id } = useParams();

    const commentData = (event) => {
        event.preventDefault();
        if (comment.trim()) {
            postComment(article_id, comment)
                .then((newComment) => {
                    setComment('');
                    onPostComment(newComment);
                    console.log(response);
                })
                .catch((error) => {
                    console.error(`Failed to post comment to Article ${article_id}`, error);
                });
        }
    };

    return (
        <div className="add-comment">
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
        </div>
    );
}

export default PostComment;
