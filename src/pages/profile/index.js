import { React, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "../../axiosConfig";
import Banner from "../home/components/banner";
import "../home/components/banner/styles.scss";
import "./styles.scss";
import { getProfile } from "../../api/users";

const Profile = () => {
    const [user, setUser] = useState({
        name: "",
        surname: "",
        coins: 0,
        betsWon: 0,
        betsLost: 0,
        totalWon: 0,
        totalLoss: 0
    });
    const get = async () => {
        var result = null;
        console.log("aaaaaaaaaa");
        result = await getProfile();
        setUser(result ? {
            name: result.data.name,
            surname: result.data.surname,
            coins: result.data.coins.vaciusCoin,
            betsWon: 0,
            betsLost: 0,
            totalWon: 0,
            totalLoss: 0
        } : user)
    };
    get();
    return (
        <div className="profile__page">
            <div className="name">
                {user.name} {user.surname}
            </div>
            <div className="flex">
                <Card className="flex-child card">
                    <Card.Body>
                        <Card.Title className="card-title">Inventory</Card.Title>
                            <hr/>
                            <div className="flex">
                                <div className="flex-child card-text">
                                    Vacius Coins: {user.coins}
                                    <img src="/img/vacius-coin.png"></img>
                                </div>
                            </div>
                    </Card.Body>
                </Card>
                <Card className="flex-child card">
                    <Card.Body>
                        <Card.Title className="card-title">Stats</Card.Title>
                        <hr/>
                        <Card.Text className="card-text">
                            Bets won: {user.betsWon}
                        </Card.Text>
                        <Card.Text className="card-text">
                            Bets lost: {user.betsLost}
                        </Card.Text>
                        <Card.Text className="card-text">
                            Total winnings: {user.totalWon}
                        </Card.Text>
                        <Card.Text className="card-text">
                            Total loss: {user.totalLoss}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Banner
                title="Win over 1000 Makackas coin by betting today!"
                description="Predict the future! Bet starting today and become rich by winning both Makackas and Vacius coins."
                className="container footer"
            />
        </div>
    );
};

export default Profile;