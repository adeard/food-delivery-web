import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import FormLogin from '../fragments/FormLogin';

const LoginLayout = () => {
    return (
		<Row>
			<Col md={4} lg={6} className="d-none d-md-flex bg-image"></Col>
			<Col md={8} lg={6}>
                <div className="login d-flex align-items-center py-5">
                    <Container>
                        <Row>
                            <Col md={9} lg={8} className="mx-auto pl-5 pr-5">
                                <h3 className="login-heading mb-4">Hallo !</h3>
                                <FormLogin />
                            </Col>
                        </Row>
                    </Container>
                </div>
			</Col>
		</Row>
    );
}


export default LoginLayout;