import React from 'react';
import Events from '../components/Events/Events';
import Footer from '../components/Footer/Footer';
import NavbarCompo from '../components/NavbarCompo/NavbarCompo';

const MoreEvents = () => {
    return (
        <>
         <NavbarCompo />
         <Events limit={false} />
         <Footer />
        </>
    );
};

export default MoreEvents;