import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar() {
    return  (
    <nav>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: "space-around", margin: 0}}>
            <li><Link id="allArticles" to='/Articles'>Articles</Link></li>
            <li><Link id="allTopics" to='/Topics'>Topics</Link></li>
            <li><Link id="allAUsers" to='/Users'>Users</Link></li>    
        </ul>
        <SearchBar />
    </nav>
        )
}

export default NavBar;