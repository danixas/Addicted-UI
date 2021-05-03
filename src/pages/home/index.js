import { React, useState } from "react";
import { Container } from "react-bootstrap";
import ActiveBets from "./components/activeBets";
import Banner from "./components/banner";
import BetForm from "./components/betForm";
import BetsTable from "./components/betsTable";
import FuturedBet from "./components/futuredBet";
import "./styles.scss";

const Home = () => {
    const [show, setShow] = useState(false);

    const displayBetForm = () => {
        setShow(!show);
    };

    const onFormSubmit = async (e) => {
        e.preventDefault();
    };
    return (
        <>
            <BetForm show={show} onHide={displayBetForm} onSubmit={onFormSubmit} />
            <div className="home__page">
                <FuturedBet title="Vacius neateis į paskaitą" onClick={displayBetForm} />
                <Banner
                    title="Win over 1000 Makackas coin by betting today!"
                    description="Predict the future! Bet starting today and become rich by winning both Makackas and Vacius coins."
                    className="banner"
                />
                <ActiveBets />
                <BetsTable onClick={displayBetForm} />
            </div>
        </>
    );
};

export default Home;
