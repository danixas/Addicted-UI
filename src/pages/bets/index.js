import { React, useState, useEffect } from 'react';
import { Button, Modal } from "react-bootstrap";
import "./styles.scss";
import BetsTable from "./components/table";
import BetForm from './components/form';
import { getAllBets } from "../../api";

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
        <div className="center">
            <h1>Active bets</h1>
        </div>
        
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
        <div className="center">
            <BetsTable bets={bets} onBetsChange={onBetsChange} refreshBets={refreshBets}/>
        </div>
        
        </>
    );
};

export default Bets;