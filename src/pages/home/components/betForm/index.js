import { React, useState } from "react";
import { Button, Form, ListGroup, Modal, Tab, Badge } from "react-bootstrap";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import "./styles.scss";

const BetForm = ({ show, onHide, onSubmit }) => {
    const [betOption, setBetOption] = useState(0);
    const [betType, setBetType] = useState(-1);

    const onBetOptionSelect = (e, i) => {
        e.preventDefault();
        setBetOption(i);
    };

    const getBetTypeColor = (selected) => ({
        backgroundColor: betType !== -1 && betType !== selected && "#ccc",
    });

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
                                <ListGroup.Item
                                    action
                                    href="#bet0"
                                    onClick={(e) => onBetOptionSelect(e, 0)}
                                >
                                    Vacius neateis i paskaita
                                </ListGroup.Item>
                                <ListGroup.Item
                                    action
                                    href="#bet1"
                                    onClick={(e) => onBetOptionSelect(e, 1)}
                                >
                                    Vacius ateis i paskaita bet veluos ~ 5min
                                </ListGroup.Item>
                                <ListGroup.Item
                                    action
                                    href="#bet2"
                                    onClick={(e) => onBetOptionSelect(e, 2)}
                                >
                                    Vacius ateis i paskaita bet veluos ~ 10min
                                </ListGroup.Item>
                            </ListGroup>
                        </Form.Group>
                        <Form.Group>
                            <div className="d-flex justify-content-between mt-4">
                                <h5>Bet Type</h5>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#bet0">
                                        <Badge
                                            variant="success"
                                            className="bet_type__btn"
                                            style={getBetTypeColor(0)}
                                            onClick={() => setBetType(0)}
                                        >
                                            <IoMdArrowUp color="white" className="mr-1" />
                                            1.35
                                        </Badge>{" "}
                                        <Badge
                                            variant="danger"
                                            className="bet_type__btn"
                                            style={getBetTypeColor(1)}
                                            onClick={() => setBetType(1)}
                                        >
                                            <IoMdArrowDown color="white" className="mr-1" />
                                            3.05
                                        </Badge>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#bet1">
                                        <Badge
                                            variant="success"
                                            className="bet_type__btn"
                                            style={getBetTypeColor(0)}
                                            onClick={() => setBetType(0)}
                                        >
                                            <IoMdArrowUp color="white" className="mr-1" />
                                            0.61
                                        </Badge>{" "}
                                        <Badge
                                            variant="danger"
                                            className="bet_type__btn"
                                            style={getBetTypeColor(1)}
                                            onClick={() => setBetType(1)}
                                        >
                                            <IoMdArrowDown color="white" className="mr-1" />
                                            2.14
                                        </Badge>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#bet2">
                                        <Badge
                                            variant="success"
                                            className="bet_type__btn"
                                            style={getBetTypeColor(0)}
                                            onClick={() => setBetType(0)}
                                        >
                                            <IoMdArrowUp color="white" className="mr-1" />
                                            1.12
                                        </Badge>{" "}
                                        <Badge
                                            variant="danger"
                                            className="bet_type__btn"
                                            style={getBetTypeColor(1)}
                                            onClick={() => setBetType(1)}
                                        >
                                            <IoMdArrowDown color="white" className="mr-1" />
                                            2.11
                                        </Badge>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Form.Group>
                    </Tab.Container>
                    <Form.Group>
                        <Form.Control
                            name="title"
                            placeholder="Enter bet size"
                            // onChange={}
                            required
                        />
                        <p className="mt-1 float-right">Balance: 420</p>
                        <p className="mt-1 text-left">Expected profit: 112</p>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Make Bet
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BetForm;
