import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form, Button} from 'react-bootstrap';

const Register = () => {

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(e.target.inputEmail.value)
		console.log(e.target.inputPassword.value)
	}


    	return (
    	  <Container fluid className='bg-white'>
	         <Row>
	            <Col md={4} lg={6} className="d-none d-md-flex bg-image"></Col>
	            <Col md={8} lg={6}>
	               <div className="login d-flex align-items-center py-5">
	                  <Container>
	                     <Row>
	                        <Col md={9} lg={8} className="mx-auto pl-5 pr-5">
	                           <h3 className="login-heading mb-4">Daftar</h3>
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
	                        </Col>
	                     </Row>
	                  </Container>
	               </div>
	            </Col>
	         </Row>
	      </Container>
    	);
}


export default Register;