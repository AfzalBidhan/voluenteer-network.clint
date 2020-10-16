import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Events.css';

const Events = (props) => {
    //destructing props
    const { handleVolunteer, limit,handleMore } = props;

    //this state store the all events
    const [events, setEvents] = useState([]);

    //get all events from database by api call
    useEffect(() => {
        fetch("https://sleepy-ocean-25095.herokuapp.com/getEvents")
            .then(res => res.json())
            .then(data => setEvents(data));
    },[limit]);

    //this function store some colors and return random color
    const colors = () => {
        const colorValues = ["#ffbd3e", "#ff7044", "#3f90fc", "#421fcf"];
        return colorValues[Math.floor(Math.random() * colorValues.length)];
    };

    return (
        <Container className="mt-3 pb-5">
            {limit && <div className="d-flex  justify-content-between">
                <h2 className="font-weight-bold m-0">Events</h2>
                <Button variant="outline-primary" onClick={handleMore}>More Events</Button>
            </div>}
            <div className="events">
                <Row>
                    {events.map(event =>
                        <Col md={3} key={event._id} className="mt-3">
                            <div
                                className="event"
                                onClick={() => handleVolunteer(event._id)}
                            >
                                <img
                                    src={event.image}
                                    alt="eventImage"
                                />
                                <div style={{
                                    backgroundColor: `${colors()}`,
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "70px",
                                    textAlign: "center",
                                }}>
                                    <h5 className="font-weight-bold text-light mt-2">
                                        {event.name}
                                    </h5>
                                </div>
                            </div>
                        </Col>)}
                </Row>
            </div>
        </Container>
    );
};

export default Events;