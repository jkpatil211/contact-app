import { useRef } from "react";
import { useHistory } from "react-router-dom";

const CardForm = (props) => {

    const inputEmail = useRef(null);
    const inputName = useRef(null);

    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        let nameVal = inputName.current.value;
        let emailVal = inputEmail.current.value;
        if(validate()) {
            let data = {name: nameVal, email: emailVal}
            props.addContacts(data);
            inputName.current.value = "";
            inputEmail.current.value = "";
            history.push('/');
        }
    }

    const validate = () => {
        return true;
    }

    return (
        <>
        <h1>Add Contact</h1>
        <form className="row" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input ref={inputName} className="form-control" type="text" name="name" placeholder="Enter name" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input ref={inputEmail} className="form-control" type="email" name="email" placeholder="email@anything.com" />
            </div>
            <div className="col-12 md-3">
                <button type="submit" className="btn app-btn app-btn-shadow">Add</button>
            </div>
            
        </form>
        </>
    )
}

export default CardForm;