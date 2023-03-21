const ListBar = () => {
    return (
        <div className="nav">
            <ul>
                <li><a class="active" href="http://localhost:3000/">Anime-Site</a></li>
                <li><a href="http://localhost:3000/">Home</a></li>
            </ul>
            <div className="inputContainer styleNav">
                <input type="text" placeholder="Filter Movie By" />
                <img className="icons" src="search-search-6.svg" alt="" />
            </div>
            <button className="styleNav">SIGNIN <img className="icons" src="enter-33.svg" alt="entrer" /></button>
        </div>
    )
}

export default ListBar;