import Card from "./card"

const CardFilms = (props) => {
    
    return (
        <div className="Card">
            {
                props.list.map(item =>
                    <Card items = {item}/>
                    
                )
            }
        </div>

    )
}

export default CardFilms 