
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteAction } from '../reducers/actions';
const Card = (props) => {

    return (
        <div className="carte">
            <div key={props.item.id} className="imageCard">
                <img alt="film" src={props.item.image}></img>
            </div>
            <div className="styleText">
                <h3>{props.item.title}</h3>
                <p>{props.item.descripton}</p>
                <div className='but'>
                    <NavLink className="navLink" to="/Movie" state={props.item}>
                        <button>Wach Now <img className="icons" src="enter-33.svg" alt="entrer" /></button>
                    </NavLink>
                    <button onClick={()=>props.delete(props.item.id)} >delete</button>
                </div>
            </div>
        </div >
    )
}


const mapStateToProps = state => {
    return {
        listTo: state.list,
    }
}

const mapDispatchProps = dispatch=> ({ 
    delete : (id) => {
        dispatch(deleteAction(id))}
  
})
export default connect(mapStateToProps, mapDispatchProps)(Card) 