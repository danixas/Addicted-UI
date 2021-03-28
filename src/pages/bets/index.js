import { React, useState } from 'react';
import { Button, Form, Modal, Dropdown } from "react-bootstrap";

import Navbar from '../../components/Navbar';
import BetTable from "./components/betTable";

const Bets = () => {
    const [bets, setBets] = useState([]);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    const [bet, setBet] = useState({});

    const onFormSubmit = (e) => {
        console.log(bet);
        setBets([
            ...bets,
            bet
        ]);
        handleShow();
    };

    const updateBet = (e) => {
        const {name, value} = e.target;
        setBet({
            ...bet,
            [name]: value,
        });
    };
    
    return(
        <>
        <Navbar />
        <div>
            <h1>BETS PAGE</h1>
        </div>
        <Button variant="secondary" onClick={handleShow}>
            Add Bet
        </Button>
        <Modal show={show} onHide={handleShow}>
            <Modal.Header closeButton>
                <Modal.Title>Create a new bet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onFormSubmit}>
                    <Form.Group>
                        <Form.Control
                            name="title"
                            placeholder="Enter bet title"
                            onChange={updateBet}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="textarea"
                            name="description"
                            placeholder="Enter bet description"
                            onChange={updateBet}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="datetime-local"
                            name="dateStart"
                            placeholder="Choose start date"
                            onChange={updateBet}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="datetime-local"
                            name="dateEnd"
                            placeholder="Choose end date"
                            onChange={updateBet}
                            required
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={onFormSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        <div>
            <BetTable bets={bets}/>
        </div>
        
        </>
    );
};

export default Bets;