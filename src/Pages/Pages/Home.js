import Card from "../../Component/card";
import { connect } from "react-redux";

const Home = (props) => {
    return (
        <div className="Card">
            {
                props.listTo.map(item =>
                    <Card key={item.id} item={item} />)
            }
        </div>

    )
};
const mapStateToProps = state => {
    return {
        listTo: state.list,
    }
}
export default connect(mapStateToProps)(Home)
