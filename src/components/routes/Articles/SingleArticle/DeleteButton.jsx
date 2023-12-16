import { deleteCommentById } from "../../../../../api"

function DeleteButton({ comment_id, onDeleteComment }) {

    const deleteComment = () => {
        deleteCommentById(comment_id)
            .then((response) => {
                if (response.status === 204) {
                    console.log(response);
                    console.log(`Comment Deleted`, response);
                    onDeleteComment(comment_id, true); 
                } else {
                    console.error(`Failed to delete comment ${comment_id}: ${response}`);
                    onDeleteComment(comment_id, false); 
                }
            }).catch((error) => {
                console.error(`Error deleting comment ${comment_id}`, error);
                onDeleteComment(comment_id, false); 
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