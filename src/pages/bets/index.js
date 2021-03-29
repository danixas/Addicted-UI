import { React, useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import "./styles.scss";

import Navbar from '../../components/Navbar';
import BetTable from "./components/betTable";

const Bets = () => {
    const [bets, setBets] = useState([]);
    const [betOptions, setBetOptions] = useState([]);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    const [bet, setBet] = useState({});

    const onFormSubmit = async(e) => {
        e.preventDefault();
        setBets([
            ...bets,
            bet
        ]);
        handleShow();
    };

    const updateBet = (e) => {
        const {name, value} = e.target;
        let newValue = value;
        if(name === "betOptions")
        {
            newValue = [...betOptions, ...value.split("|")]
        }
        setBet({
            ...bet,
            [name]: newValue,
        });
    };
    
    return(
        <>
        <Navbar />
        <div className="center">
            <h1>Active bets</h1>
        </div>
        
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
                            name="betOptions"
                            placeholder="betting options: option1|option2|option3|..."
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
        <div className="center">
            <BetTable bets={bets}/>
            <Button variant="secondary" onClick={handleShow} block>
                Add Bet
            </Button>
        </div>
        
        </>
    );
};

export default Bets;