import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form, Button, Toast, Collapse} from 'react-bootstrap';
import { register } from '../../api/auth.service';

const FormRegister = () => {
	const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");

	const onSubmit = (e) => {
		e.preventDefault()

        if (e.target.inputPassword.value !== e.target.inputConfirmPassword.value) {
            setMessage(<b style={{"color":"red"}}>Password tidak sesuai !</b>)
            setShow(true)

            return
        }

        let registerData = {
            "email": e.target.inputEmail.value,
            "password": e.target.inputPassword.value,
            "confirm_password": e.target.inputConfirmPassword.value,
            "fullname": e.target.inputFullname.value,
            "phone_number": e.target.inputPhoneNumber.value
        }

        e.target.reset()

        register(registerData, (status, result) => {
            if (status) {
                setMessage(<b style={{"color":"green"}}>Akun berhasil dibuat !</b>)             
            } else {
                setMessage(<b style={{"color":"red"}}>{result.response.data.errors}</b>)
            }

            setShow(true)
        })

        return
	}

    return (
		<>
            <Collapse in={show} timeout={4000}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </Collapse>
                            
            <Form onSubmit={onSubmit}>
                <div className="form-label-group">
                    <Form.Control type="email" id="inputEmail" placeholder="Email address" />
                    <Form.Label htmlFor="inputEmail">Email / Mobile</Form.Label>
                </div>
                <div className="form-label-group">
                    <Form.Control type="password" id="inputPassword" placeholder="Password" />
                    <Form.Label htmlFor="inputPassword">Password</Form.Label>
                </div>
                <div className="form-label-group">
                    <Form.Control type="password" id="inputConfirmPassword" placeholder="Confirm Password" />
                    <Form.Label htmlFor="inputConfirmPassword">Confirm Password</Form.Label>
                </div>
                <div className="form-label-group">
                    <Form.Control type="text" id="inputFullname" placeholder="Fullname" />
                    <Form.Label htmlFor="inputFullname">Fullname</Form.Label>
                </div>
                <div className="form-label-group">
                    <Form.Control type="text" id="inputPhoneNumber" placeholder="Phone Number" />
                    <Form.Label htmlFor="inputPhoneNumber">Phone Number</Form.Label>
                </div>
                <Button variant="link" type="submit" className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2"> Daftar </Button>
                
                <div className="text-center pt-3">
                    Sudah mempunyai akun? <Link className="font-weight-bold" to="/login">Masuk</Link>
                </div>
            </Form>
        </>
    );
}


export default FormRegister;