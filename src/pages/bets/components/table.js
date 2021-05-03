import { React, useState } from 'react';
import MaterialTable from 'material-table';
import { Button, Modal } from "react-bootstrap";
import BetForm from './form';
import OptionsTable from './optionsForm';
import { deleteBet } from "../../../api";


const BetsTable = ({bets, onBetsChange, refreshBets}) => {
    const [isOpen, setOpen] = useState(false);
    const [isOptionsOpen, setOptionsOpen] = useState(false);
    const [selectedBet, setSelectedBet] = useState(null);

    const toggleFormStatus = () => {
        setOpen(!isOpen);
    };
    
    const toggleOptionsForm = () => {
        setOptionsOpen(!isOptionsOpen);
    };

    const onEditBet = (bet) => {
        setSelectedBet({...bet, dateStart: bet.dateStart.split('T')[0], dateEnd: bet.dateEnd.split('T')[0]});
        setOpen(true);
    };

    const onOptionBet = (bet) => {
        setSelectedBet({...bet, dateStart: bet.dateStart.split('T')[0], dateEnd: bet.dateEnd.split('T')[0]});
        setOptionsOpen(true);
    };

    const onDeleteBet = async (bet) => {
        await deleteBet(bet.id);
        refreshBets();
    };

    const actions = (bet) => (
        <>    
            <Button
                type="button"
                key="editButton"
                className="secondary"
                variant="info"
                onClick={()=>onEditBet(bet)}
            >
                Edit
            </Button>
            <Button
                type="button"
                key="optionsButton"
                variant="info"
                className="primary mx-1"
                onClick={()=>onOptionBet(bet)}
            >
                Options
            </Button>
            <Button
                type="button"
                key="optionsButton"
                className="mx-1"
                variant="danger"
                onClick={()=>onDeleteBet(bet)}
            >
                Delete
            </Button>
        </>        
    );

    return(
        <>
            <MaterialTable
                className="material-table"
                columns={[
                    { title: "Title", field: "title" },
                    { title: "Description", field: "description" },
                    { title: "Start time", field: "dateStart" },
                    { title: "End time", field: "dateEnd" },
                    { title: "Options count", field: "options_count" },
                    { title: "", field: "action", cellStyle: { textAlign: "right" }}
                ]}
                isLoading={false}
                data={bets ? bets.map(u => ({
                    ...u, 
                    dateStart: u.dateStart.split("T")[0], 
                    dateEnd: u.dateStart.split("T")[0], 
                    options_count: u?.betOptions?.length ?? 0,
                    action: actions(u),
                })) : []}         
            />
            <Modal show={isOpen} onHide={toggleFormStatus}>
                <Modal.Header closeButton>
                    <Modal.Title>{bets ? "Edit bet" : "Add bet" }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BetForm 
                        betData={selectedBet}
                        onBetsChange={onBetsChange}
                        toggleOpen={toggleFormStatus}
                    />
                </Modal.Body>
            </Modal>
            <Modal show={isOptionsOpen} onHide={toggleOptionsForm} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OptionsTable bet={selectedBet} refreshBets={refreshBets}/>
                </Modal.Body>
            </Modal>
        </>
        
        
    );
};

export default BetsTable;