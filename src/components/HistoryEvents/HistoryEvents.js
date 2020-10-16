import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import  './HistoryEvents.css';

const HistoryEvents = ({event,handleCancel}) => {
    
    return (
        <>
         <Container className="p-">
             <Row>
                 {event && 
                 event.map(ev => 
                    <Col key={ev._id} md={6}>
                        <div className="event-reg mb-3 d-flex">
                            <img src={ev.image} alt="eventImage" />
                            <div className="ml-3">
                               <h4 className="text-light">{ev.eventName}</h4>
                               <h5 className="text-light">{ev.eventDate}</h5>
                               <p className="text-light">{ev.eventDes}</p>
                               <Button variant="primary" onClick={()=>handleCancel(ev._id)}>Cancel</Button>
                            </div>
                        </div>
                    </Col>
                 )
                 }
             </Row>
         </Container>
        </>
    );
};

export default HistoryEvents;