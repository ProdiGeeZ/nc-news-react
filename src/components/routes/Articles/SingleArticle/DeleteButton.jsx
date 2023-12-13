import { deleteCommentById } from "../../../../../api"

function DeleteButton({ comment_id, onDeleteComment }) {

    const deleteComment = () => {
        deleteCommentById(comment_id)
            .then((response) => {
                console.log(`Comment Deleted`, response);
                onDeleteComment(comment_id)
            }).catch((error) => {
                console.log(`Error deleting comment ${comment_id}`, error);
            });
    }

    return (
        <>
            <div className="tooltip">
                <button className="delete-comment" onClick={deleteComment}>
                    <img src="\src\assets\delete.png" alt="delete comment button" className="delete-icon" />
                </button>
                <span className="tooltiptext">Delete Comment</span>
            </div>
        </>
    )
}

export default DeleteButton;