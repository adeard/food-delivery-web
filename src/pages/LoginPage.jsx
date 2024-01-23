import React from 'react';
import {Container} from 'react-bootstrap';
import LoginLayout from '../components/layouts/LoginLayout';

const LoginPage = () => {
    return (
		<Container fluid className='bg-white'>
			<LoginLayout />
		</Container>
    );
}


export default LoginPage;