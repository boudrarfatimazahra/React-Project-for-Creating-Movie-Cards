const Card = (props)=>{
    return(
        <div className="carte">
                        <div className="imageCard">
                        <img alt="film" src={props.items.image}></img>
                        </div>
                        <div className="styleText">
                            <h3>{props.items.title}</h3>
                            <p>{props.items.descripton}</p>
                            <button>Wach Now <img className="icons" src="enter-33.svg" alt="entrer"/></button>
                        </div>
                    </div>
    )
}

export default Card