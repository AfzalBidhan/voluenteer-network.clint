import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../../App';
import './VolRegForm.css';

const VolRegForm = (props) => {
    const {event,handleSubmit,descriptionErr,dateErr,setDescription,setDate} = props;
    const [user] = useContext(UserContext);
    return (
        <div className="form-area">
            <h2 className="font-weight-bold mb-4">Register as a Volunteer</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" defaultValue={user.name} readOnly />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" defaultValue={user.email} readOnly />
                </Form.Group>

                <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" onChange={(e)=>setDate({
                        date: e.target.value
                    })} />
                </Form.Group>
                <span style={{color: "red"}}>{dateErr}</span>

                <Form.Group controlId="textarea">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2} onChange={(e)=>setDescription({
                        description: e.target.value
                    })} />
                </Form.Group>
                <span style={{color: "red"}}>{descriptionErr}</span>

                <Form.Group controlId="eventName">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="text" defaultValue={event} readOnly />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn-block">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default VolRegForm;