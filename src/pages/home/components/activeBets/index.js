import { React } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

import "./styles.scss";

const ActiveBets = ({ title, ...props }) => {
    return (
        <div {...props} className="active_bets__card">
            <div className="header">Active Bets</div>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <p className="mb-0">Vacius neateis i paskaita</p>
                    <Badge variant="success">
                        <IoMdArrowUp color="white" className="mr-1" />
                        0.61
                    </Badge>{" "}
                    <span className="bet_info">Bet: 420, win 256.2</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p className="mb-0">Lorem Ipsum</p>
                    <Badge variant="danger">
                        <IoMdArrowDown color="white" className="mr-1" />
                        0.2
                    </Badge>{" "}
                    <span className="bet_info">Bet: 111, win 22.2</span>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default ActiveBets;
