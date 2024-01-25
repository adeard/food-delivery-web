import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form, Button, Toast, Collapse} from 'react-bootstrap';
import FontAwesome from '../common/FontAwesome';
import { login } from '../../api/auth.service';

const FormLogin = () => {
	const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");

    const onFinish = (e) => {
        e.preventDefault()

		let loginData = {
            "email": e.target.inputEmail.value,
            "password": e.target.inputPassword.value,
        }

        login(loginData, (status, result) => {
            if (status) {
                localStorage.setItem('token', result)           
				window.location.href = "/"
            } else {
				setMessage(<b style={{"color":"red"}}>Password tidak sesuai !</b>)
            	setShow(true)
            }
        })
    };

    return (
		<>
			<Collapse in={show} timeout={4000}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </Collapse>

			<Form onSubmit={onFinish}>
				<div className="form-label-group">
					<Form.Control type="email" id="inputEmail" name="inputEmail" placeholder="Email address" />
					<Form.Label htmlFor="inputEmail">Email / Mobile</Form.Label>
				</div>
				<div className="form-label-group">
					<Form.Control type="password" id="inputPassword" name="inputPassword" placeholder="Password" />
					<Form.Label htmlFor="inputPassword">Password</Form.Label>
				</div>
				<Form.Check  
					className='mb-3'
					custom
					type="checkbox"
					id="custom-checkbox"
					label="Remember password"
				/>
				<Button variant="link" type="submit" className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Masuk</Button>
				<div className="text-center pt-3">
					Belum mempunyai akun? <Link className="font-weight-bold" to="/register">Daftar</Link>
				</div>
				<hr className="my-4" />
				<p className="text-center">Masuk Dengan</p>
				<div className="row">
					<div className="col pr-2">
						<Button className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase" type="submit"><FontAwesome icon="google" className="mr-2" /> Google</Button>
					</div>
					<div className="col pl-2">
						<Button className="btn pl-1 pr-1 btn-lg btn-facebook font-weight-normal text-white btn-block text-uppercase" type="submit"><FontAwesome icon="facebook" className="mr-2" /> Facebook</Button>
					</div>
				</div>
			</Form>
		</>
    );
}


export default FormLogin;