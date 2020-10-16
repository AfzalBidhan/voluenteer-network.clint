import React, { useContext } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import LoginBox from '../components/LoginBox/LoginBox';
import NavbarCompo from '../components/NavbarCompo/NavbarCompo';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase';
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [, setUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    
    let { from } = location.state || { from: { pathname: "/" } };
    const loginUser = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const { displayName, email } = result.user;
            setUser({
                loggedInUser: true,
                name: displayName,
                email: email
            })
            history.replace(from);
        })
    };
    return (
        <>
            <NavbarCompo />
            <Container className="mt-5">
                <Jumbotron >
                    <LoginBox login={loginUser} />
                </Jumbotron>
            </Container>
            <Footer />
        </>
    );
};

export default Login;