import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="nav">
            <ul>
            <Link class="active" to="/AnimeSite" style={{textDecoration:'none'}}><li>Anime-Site</li></Link>
                <Link style={{textDecoration:'none'}} to="/"><li>Home</li></Link>
                <Link style={{textDecoration:'none'}} to="/About"><li>About</li></Link>
                <Link style={{textDecoration:'none'}} to="/Contact"><li>Contact</li></Link>
            </ul>
            <div className="inputContainer styleNav">
                <input type="text" placeholder="Filter Movie By" />
                <img className="icons" src="search-search-6.svg" alt="" />
            </div>
            <button className="styleNav">SIGNIN <img className="icons" src="enter-33.svg" alt="entrer" /></button>
        </div>
    )
}

export default NavBar;