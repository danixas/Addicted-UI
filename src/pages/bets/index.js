import { React, useState, useEffect } from 'react';
import { Button, Modal } from "react-bootstrap";
import "./styles.scss";
import BetsTable from "./components/table";
import BetForm from './components/form';
import { getAllBets } from "../../api";
import MainContainer from '../../components/MainContainer';

const Bets = () => {
    const [bets, setBets] = useState([]);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    
    const refreshBets = async () => {
        const result = await getAllBets();
        setBets(result.data);
        return result.data;
    };


    useEffect(()=> {
        refreshBets();
    }, [])

    const onBetsChange = (bet) => {
        setBets(
            bets
                .map(b => b.id === bet.id ? bet : b)
                .concat(bets.find(b=>b.id===bet.id) ? [] : [bet])
        );
    };

    return(
        <>
            <h2>Active bets</h2>
            <hr />
            <BetsTable bets={bets} onBetsChange={onBetsChange} refreshBets={refreshBets}/>
            <Button variant="secondary" onClick={handleShow} block>
                Add Bet
            </Button>   
            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a new bet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <BetForm onBetsChange={onBetsChange}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
  
        </>
    );
};

export default Bets;