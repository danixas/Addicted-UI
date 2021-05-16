import { React, useState, useEffect } from "react";
import ActiveBets from "./components/activeBets";
import Banner from "./components/banner";
import BetForm from "./components/betForm";
import BetsTable from "./components/betsTable";
import FuturedBet from "./components/futuredBet";
import { messageHandling } from '../../utils/messageHandling';
 
import { getAllActiveBets, getProfile, createOffer, getUserOffers } from "../../api";
import "./styles.scss";

const Home = () => {
    const [show, setShow] = useState(false);
    const [bets, setBets] = useState([]);
    const [activeBet, setActiveBet] = useState({ betOptions: [] });
    const [offers, setActiveOffers] = useState([]);
    const [balance, setBalance] = useState(0);

    const displayBetForm = (bet) => {
        setActiveBet(bet);
        setShow(!show);
    };

    const onFormSubmit = async (e, betInfo) => {
        e.preventDefault();
        console.log(`betinfo on submit:`);
        console.log(betInfo);
        e.preventDefault();
        await createOffer(betInfo);
        setShow(!show);
        messageHandling("success", "Successfully stolen your money");
    };

    useEffect(() => {
        getProfile().then((user) => {
            setBalance(user.data.coins.vaciusCoin);
        });

        getUserOffers().then(offers => {
            setActiveOffers(offers.data);
        })
    }, [show]);

    useEffect(() => {
        getAllActiveBets().then((bets) => {
            console.log(bets.data);
            setBets(bets.data);
        });
    }, []);

    return (
        <>
            <BetForm
                show={show}
                bet={activeBet}
                balance={balance}
                onHide={() => setShow(!show)}
                onSubmit={onFormSubmit}
            />
            <div className="home__page">
                {bets && bets[0] && <FuturedBet bet={bets[0]} onClick={() => displayBetForm(bets[0])} />}
                <Banner
                    title="Win over 1000 Makackas coin by betting today!"
                    description="Predict the future! Bet starting today and become rich by winning both Makackas and Vacius coins."
                    className="banner"
                />
                <ActiveBets offers={offers}/>
                <BetsTable onClick={displayBetForm} items={bets} />
            </div>
        </>
    );
};

export default Home;
