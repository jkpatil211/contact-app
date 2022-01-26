import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const CardForm = (props) => {

    const inputEmail = useRef(null);
    const inputName = useRef(null);
    const [gender, setGender] = useState(null);

    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        let nameVal = inputName.current.value;
        let emailVal = inputEmail.current.value;

        if(validate()) {
            let data = {name: nameVal, email: emailVal, gender}
            props.addContacts(data);
            console.log('not yet waiting for async')
            history.push('/');
        }
    }

    const validate = () => {
        if(inputName.current.value && inputEmail.current.value) {
            return true;
        }
        alert('All fields are mandatory')
        return false;
    }

    const handleRadio = (e) => setGender(e.target.value)

    return (
        <>
        <h1>Add Contact</h1>
        <form className="row" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input ref={inputName} className="form-control" type="text" name="name" placeholder="Enter name" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input ref={inputEmail} className="form-control" type="email" name="email" placeholder="email@anything.com" required />
            </div>
            <div className="mb-3">
                {
                    ['Male', 'Female'].map((v,i) => (
                        <div key={i} className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" value={v.toLowerCase()} onClick={handleRadio} />
                            <label className="form-check-label">{v}</label>
                        </div>
                    ))
                }
                {/* <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" value="male" />
                    <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" value="female" />
                    <label className="form-check-label">Female</label>
                </div> */}
            </div>
            <div className="col-12 md-3">
                <button type="submit" className="btn app-btn app-btn-shadow">Add</button>
            </div>
            
        </form>
        </>
    )
}

export default CardForm;