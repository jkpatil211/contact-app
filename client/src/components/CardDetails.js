import userMale from '../images/userMale.png';
import userFemale from '../images/userFemale.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CardDetails = (props) => {

    const CONTACTS_KEY = 'contacts';
    const urlParams = useParams();
    const [contact, setContact] = useState("");

    useEffect(() => {
        let contacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));
        let contactData = contacts.find(con => con.id === urlParams.id)
        console.log('newcontact-->', contactData)
        if(contactData) setContact(contactData);
    },[urlParams]);

    return (
       
        <div className="row p-3">
            {contact &&
            <div className="col-lg-6 card shadow-sm p-3 rounded-3 col-md-9 col-sm-9 col-xs-9 mx-auto d-block" >
                <img src={userFemale} style={{width: '15rem'}} className="card-img-top image-fluid" />
                <div className="card-body">
                    <h4 className="card-title">{contact.name}</h4>
                    <p className="card-text">{contact.email}</p>
                </div>
            </div>
            }
        </div>
        
    )
}

export default CardDetails;