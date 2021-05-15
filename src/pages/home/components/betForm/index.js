import { React, useState, useEffect } from "react";
import { Button, Form, ListGroup, Modal, Tab, Badge } from "react-bootstrap";
import "./styles.scss";

const BetForm = ({ show, onHide, onSubmit, bet, balance }) => {
    const [betInfo, setBetInfo] = useState({});

    const onBetOptionSelect = (e, i) => {
        e.preventDefault();
        setBetInfo({ ...betInfo, betOptionId: i });
    };

    const onAmountChange = (e) => {
        e.preventDefault();
        setBetInfo({ ...betInfo, amount: Number.parseInt(e.target.value) });
    };

    useEffect(() => {
        setBetInfo({ id: bet.id, betOptionId: 1, amount: 0 });
    }, [bet]);

    return (
        <Modal show={show} onHide={onHide} centered className="bets__form">
            <Modal.Header closeButton>
                <Modal.Title>Make a bet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Tab.Container defaultActiveKey="#bet0">
                        <Form.Group>
                            <ListGroup>
                                {bet.betOptions.map((option, index) => (
                                    <ListGroup.Item
                                        key={index}
                                        action
                                        href={`#bet${index}`}
                                        onClick={(e) => onBetOptionSelect(e, option.id)}
                                    >
                                        {option.title}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Form.Group>
                    </Tab.Container>
                    <Form.Group>
                        <Form.Control
                            name="title"
                            placeholder="Enter bet size"
                            onChange={onAmountChange}
                            required
                        />
                        <p className="mt-2 float-right">Balance: {balance}</p>
                        {/* <p className="mt-2 text-left">Expected profit: 112</p> */}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={(e) => onSubmit(e, betInfo)}>
                    Make Bet
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BetForm;
