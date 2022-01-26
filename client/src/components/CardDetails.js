import userMale from '../images/userMale.png';
import userFemale from '../images/userFemale.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api'

const CardDetails = (props) => {

    const CONTACTS_KEY = 'contacts';
    const urlParams = useParams();
    const [contact, setContact] = useState("");

    const getContactById = async (id) => {
        const response = await api.get(`contacts?id=${id}`);
        if(response.data.length > 0) setContact(response.data[0])
    }
    

    useEffect(() => {
        getContactById(urlParams.id);
    },[urlParams]);

    return (
       
        <div className="row p-3">
            {contact &&
            <div className="col-lg-5 col-md-7 col-sm-7 col-xs-7 card shadow-sm p-3 rounded-3 mx-auto d-block" >
                <div style={{borderRadius: "50%", backgroundColor: "#32bea6", overflow: "hidden"}}>
                    <img src={(contact.gender === 'male') ? userMale : userFemale} className="card-img-top image-fluid" />
                </div>
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