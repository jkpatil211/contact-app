import {FaUserCircle, FaTrashAlt} from 'react-icons/fa';

const Card = (props) => {
    return (
        <div key={props.id} className="row contact-card">
            <span className="col-3"><FaUserCircle size={40} /></span>
            <span className="col-6"><a href='#'>{props.name}</a></span>
            <span className="col-3">
                <FaTrashAlt className="float-end cursor-pointer" onClick={() => props.deleteContact(props.id)} />
            </span>
        </div>
    )
}

export default Card;