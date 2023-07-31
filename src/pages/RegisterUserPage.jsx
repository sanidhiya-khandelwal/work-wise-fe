import React from 'react'
import { errorAlert, infoAlert } from '../utils/alert'

const RegisterUserPage = () => {
    const name = React.useRef();
    const phone = React.useRef();
    const email = React.useRef();
    const username = React.useRef();
    const password = React.useRef();

    //for error mssgs just below input
    // const [nameError, setNameError] = React.useState('') //emi 1


    const handleSubmit = (ev) => {
        ev.preventDefault()

        const nameVal = name.current.value;
        const phoneVal = phone.current.value; //type is string
        const emailVal = email.current.value;
        const usernameVal = username.current.value;
        const passwordVal = password.current.value;

        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/; //smal case , capital case and length of username should be in between 7 to 29 chars
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (nameVal.length < 2 || nameVal.length > 30) {
            //setNameError('length should be greater than 1 and less than equals to 30 characters')//emi 2
            errorAlert('name length should be greater than 1 and less than equals to 30 characters')
            return;
        }
        if (phoneVal.length != 10) {
            errorAlert('Invalid phone number')
            return
        }

        if (!emailRegex.test(emailVal)) { //will only work if u put input type of email to text instead of email otherwise email type has its own validation which it will not show but you will not be able to fill form
            errorAlert('Invalid Email')
            return
        }
        if (!usernameRegex.test(usernameVal)) {
            errorAlert('Invaid username! It should have only a-z A-Z 0-9 _ characters and should have 8-30 characters')
            return
        }
        if (!passwordRegex.test(passwordVal)) {
            errorAlert('Invalid Password! Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:')
            return
        }
    }

    return (
        <div className="register">
            <div className="register-container">
                <div className="register-form">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" className='input-field' placeholder='Full Name' ref={name} required />
                        {/*<p>{nameError}</p> */}  {/*emi 3*/}
                        <input type="number" className='input-field' placeholder='Phone No.' ref={phone} required />
                        <input type="email" className='input-field' placeholder='Email' ref={email} required />
                        <input type="text" className='input-field' placeholder='User Name' ref={username} required />
                        <input type="password" className='input-field' placeholder='Password' ref={password} required />
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterUserPage