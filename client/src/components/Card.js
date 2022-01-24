import {FaUserCircle, FaTrashAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div key={props.id} className="row contact-card">
            <span className="col-2"><FaUserCircle size={40} /></span>
            <span className="col-7">
                <Link to={`/contact/${props.id}`}>{props.name}</Link>
                <h6>{props.email}</h6>
            </span>
            
            <span className="col-3">
                <FaTrashAlt className="float-end cursor-pointer" color='red' onClick={() => props.deleteContact(props.id)} />
            </span>
        </div>
    )
}

export default Card;