import { React, useEffect, useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
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
    const loadUserData = async () => {
        var result = null;
        result = await getProfile();
        setUser(result ? {
            name: result.data.name,
            surname: result.data.surname,
            coins: result.data.coins.vaciusCoin,
            betsWon: Math.floor(Math.random() * 10),
            betsLost: Math.floor(Math.random() * 10),
            totalWon: Math.floor(Math.random() * 500) + 100,
            totalLoss: Math.floor(Math.random() * 500) + 100
        } : user)
    };

    useEffect(() => {loadUserData()}, []);


    return (
        <div className="profile__page">
            <div className="flex-container">
                <img className="flex-profile profile" src="/img/profile2.png" />
                <div className="flex-profile">
                    <div className=" profile-summary first">
                        {user.name} {user.surname}
                    </div>
                    <div className="profile-summary second">
                        Investor at KTU addicted 🚀 
                    </div>
                </div>
            </div>
            <hr/>
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
                            Total coins won: {user.totalWon}
                        </Card.Text>
                        <Card.Text className="card-text">
                            Total coins lost: {user.totalLoss}
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