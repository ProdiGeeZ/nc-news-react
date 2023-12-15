import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../../../../api";

function PostComment({ onPostComment }) {
    const [comment, setComment] = useState('');
    const [isActive, setIsActive] = useState(false);
    const { article_id } = useParams();

    const commentData = (event) => {
        event.preventDefault();
        if (comment.trim()) {
            postComment(article_id, 'weegembump', comment)
                .then((response) => {
                    setComment('');
                    setIsActive(false);
                    onPostComment(response.data.comment, true);
                })
                .catch((error) => {
                    console.error(`Failed to post comment to Article ${article_id}`, error);
                    onPostComment(null, false); 
                    setComment('');
                });
        }
    };

    const handleCancel = () => {
        setComment('');
        setIsActive(false);
    };

    return (
        <div className="add-comment">
            <form onSubmit={commentData} className="comment-form">
                <div className="input-container">
                    <input className="comment-field"
                        type="text"
                        id="comment"
                        name="comment"
                        placeholder="Add a comment..."
                        onFocus={() => setIsActive(true)}
                        onChange={(event) => setComment(event.target.value)}
                        autoComplete="off"
                        value={comment}
                    />
                    <div className="underline"></div>
                </div>
                {isActive && (
                    <div className="button-container" style={{ display: 'flex' }}>
                        <button type="button" className="comment-cancel" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="comment-submit" disabled={!comment.trim()}>Comment</button>
                    </div>
                )}
            </form>
        </div>
    );
}

export default PostComment;
