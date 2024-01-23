import React from 'react';
import {Link} from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';
import FontAwesome from '../common/FontAwesome';

const FormLogin = () => {
    const onFinish = (values) => {
        console.log(values)
        // values.ldap = false
        // values.domain = "indofood"
        // login(values, (status, token) => {
        //     if (status && token) {
        //         localStorage.setItem('token', token)                
        //         getLoggedUser((status, result) => {
        //             if (status && result) {
        //                 localStorage.setItem('logged_user', JSON.stringify(result))
        //                 window.location.href = "/Travis"
        //             } else {
        //                 openNotificationWithIcon('error', "", result)
        //             }
        //         })
        //     } else {
        //         openNotificationWithIcon('error', "", "Invalid User LDAP")
        //     }
        // })
    };

    return (
		<Form>
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
            <Button variant="link" type="button" className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2" onClick={onFinish}>Masuk</Button>
			{/* <Link to="/" className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Masuk</Link> */}
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
    );
}


export default FormLogin;