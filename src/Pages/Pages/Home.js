import Card from "../../Component/card";

const Home = (props) => {
    return (
        <div className="Card">
            {
                props.list.map(item =>
                    <Card key={item.id} item={item} />    
                )
                    
            }
        </div>

    )
};
export default Home