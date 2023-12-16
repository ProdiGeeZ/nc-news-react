import { useUser } from "../../UserContext";

function UserHeader() {
    const { User } = useUser();

    return (
        <>
            <h6 className="navigation">Guy who's Logged In: {User.username}</h6>
        </>
    );
}

export default UserHeader;
