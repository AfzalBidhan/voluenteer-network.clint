import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import NavbarCompo from '../components/NavbarCompo/NavbarCompo';

const Donation = () => {
    return (
        <>
            <NavbarCompo />
            <Container className="mt-5">
                <Jumbotron>
                        <h1 className="font-weight-bold text-center">Coming Soon.....</h1>
                </Jumbotron>
            </Container>
            <Footer />
        </>
    );
};

export default Donation;