import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "../../axiosConfig";
import Banner from "../home/components/banner";
import "../home/components/banner/styles.scss";
import "./styles.scss";

const users = [
    {
        id: 1,
        name: "Kazimieras",
        surname: "Kondratavicius",
        betsWon: 1,
        betsLost: 0,
        totalWon: 1000,
        totalLoss: 600
    },
    {
        id: 2,
        name: "Vacius",
        surname: "Jusas",
        betsWon: 1,
        betsLost: 0,
        totalWon: 1000,
        totalLoss: 600
    },
];

const Profile = () => {
    return (
        <>
        <Container>
            <Row className="column"><h1>VARDAS PAVARDE</h1></Row>
            <Row>
                <Col className="column">
                    <h2>INVENTORY</h2>
                </Col>
                <Col className="column">
                    <h2>STATS</h2>
                    <h3>Bets won: {users[0].betsWon}</h3>
                    <h3>Bets lost: {users[0].betsLost}</h3>
                    <h3>Total winnings: {users[0].totalWon}</h3>
                    <h3>Total loss: {users[0].totalLoss}</h3>
                </Col>
            </Row>
            <Row>
                <Banner
                    title="Win over 1000 Makackas coin by betting today!"
                    description="Predict the future! Bet starting today and become rich by winning both Makackas and Vacius coins."
                    className="footer"
                />
            </Row>
            
        </Container>
        </>
    );
};

export default Profile;