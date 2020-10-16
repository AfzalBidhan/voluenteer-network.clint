import React from 'react';
import { Container } from 'react-bootstrap';
import './LoginBox.css';
import image from '../../images/google.png';

const LoginBox = (props) => {
    const {login} = props;
    return (
        <Container>
            <div className="login-area d-flex justify-content-center align-items-center">
                <div className="login-box p-4">
                    <h3 className="font-weight-bold text-center">Login with</h3>
                    <div className="login d-flex align-items-center mt-3" onClick={login}>
                         <img src={image} className="mr-3" width="40px" alt="googleImage" />
                        <h5 className="ml-5">continue with google</h5>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LoginBox;