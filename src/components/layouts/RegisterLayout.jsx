import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import FormRegister from '../fragments/FormRegister';

const RegisterLayout = () => {

    return (
		<Row>
			<Col md={4} lg={6} className="d-none d-md-flex bg-image"></Col>
			<Col md={8} lg={6}>
                <div className="login d-flex align-items-center py-5">
                    <Container>						
                        <Row>
                            <Col md={9} lg={8} className="mx-auto pl-5 pr-5">
                            <h3 className="login-heading mb-4">Daftar</h3>
                                <FormRegister />
                            </Col>
                        </Row>
                    </Container>
                </div>
			</Col>
		</Row>
    );
}


export default RegisterLayout;