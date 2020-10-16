import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Events from '../Events/Events';
import Footer from '../Footer/Footer';
import NavbarCompo from '../NavbarCompo/NavbarCompo';
import './Header.css';

const Header = () => {
    const history = useHistory();
    const handleVolunteer = (id) => {
        history.push('/registrationVolunteer/'+id);
    };
    const handleMore = () => {
        history.push('/moreEvents');
    };
    return (
        <div className="header-area">
            <div className="header-box">
                <NavbarCompo />
                <h2 className="font-weight-bold text-center mt-3">I Grow By Helping People In Need</h2>
                <div className="search-box mt-4">
                <InputGroup className="mb-3 input-box">
                    <FormControl
                        placeholder="search events"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                </div>
                <Events limit={true} handleMore={handleMore} handleVolunteer={handleVolunteer} />
                <Footer />
            </div>
        </div>
    );
};

export default Header;