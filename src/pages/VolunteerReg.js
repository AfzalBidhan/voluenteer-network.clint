import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../App';
import Footer from '../components/Footer/Footer';
import NavbarCompo from '../components/NavbarCompo/NavbarCompo';
import VolRegForm from '../components/VolRegForm/VolRegForm';

const VolunteerReg = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState({});
    const [user] = useContext(UserContext);
    const {name,  email} = user;
    const history = useHistory();
    useEffect(() => {
        fetch(`https://sleepy-ocean-25095.herokuapp.com/getSingleEvent/${eventId}`)
            .then(res => res.json())
            .then(data => setEvent(data));
    }, [eventId]);
    const [description, setDescription] = useState({
        description: '',
        descriptionErr: ''
    });
    const [date, setDate] = useState({
        date: '',
        dateErr: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!description.description > 0 && !date.date > 0){
            setDescription({
                descriptionErr: "description required"
            });
            setDate({
                dateErr: "date required"
            });
        }
        else if(!description.description > 0){
            setDescription({
                descriptionErr: "description required"
            });
        }
        else if(!date.date > 0){
            setDate({
                dateErr: "date required"
            });
        }
        else{
            const eventDate = date.date;
            const eventDes = description.description;
            const volunteer = {eventName:event.name,name,email,eventDate,eventDes, image: event.image}
            fetch('https://sleepy-ocean-25095.herokuapp.com/registerVolunteer', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({volunteer})
            })
            .then(res => res.json())
            .then(result => {
                if(result){
                    history.push('/history');
                }
            })
        }
    };
    return (
        <>
            <NavbarCompo />
            <VolRegForm
                handleSubmit={handleSubmit}
                event={event.name}
                descriptionErr={description.descriptionErr}
                dateErr={date.dateErr}
                setDescription={setDescription}
                setDate={setDate}
            />
            <Footer />
        </>
    );
};

export default VolunteerReg;