import { React } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

import "./styles.scss";

const ActiveBets = ({ title, offers, ...props }) => {
    return (
        <div {...props} className="active_bets__card">
            <div className="header">Active Bets</div>
            <ListGroup variant="flush">
                {offers.map((offer, i) => (
                    <ListGroup.Item key={i}>
                        <p className="mb-0">{offer.bet.title}</p>
                        <span className="bet_info">Bet amount: {offer.amount}</span>
                        <Badge variant="success ml-4">
                            <IoMdArrowUp color="white" className="mr-1" />
                            Active
                        </Badge>{" "}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default ActiveBets;
