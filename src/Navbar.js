import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <nav>
            <ul>
            <li><Link className="link" to="/dashboard">Home</Link></li>
            <li><Link className="link" to="/articles">Articles</Link></li>
            <li><Link className="link" to="/posts">Posts</Link></li>
            <li><Link className="link" to="/subscription">Subscription</Link></li>
            </ul>
        </nav>
    )
}