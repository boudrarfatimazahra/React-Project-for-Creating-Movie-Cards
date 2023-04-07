
import {NavLink } from 'react-router-dom';
const Card = (props) => {
    
    return (
        <div className="carte">
            <div key={props.item.id} className="imageCard">
                <img alt="film" src={props.item.image}></img>
            </div>
            <div className="styleText">
                <h3>{props.item.title}</h3>
                <p>{props.item.descripton}</p>
                <NavLink className="navLink" to="/Movie" state={props.item}>
                <button>Wach Now <img className="icons" src="enter-33.svg" alt="entrer" /></button>
                </NavLink>
            </div>
        </div>
    )
}
export default Card