import { React, useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { Button, Modal } from "react-bootstrap";
import BetForm from './form';
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import SearchIcon from "@material-ui/icons/Search";
import { updateBet, deleteBetOption, finishBet, getBetOffers } from "../../../api";
import { Edit } from '@material-ui/icons';
import { messageHandling } from '../../../utils/messageHandling';


const OptionsTable = ({bet, refreshBets, closeModal}) => {
    const [options, setOptions] = useState(null);
    const [offers, setOffers] = useState(null);


    useEffect(() => {
        (async () => {
            const offers = await getBetOffers(bet.id);
            setOffers(offers.data);
        })();
        setOptions(bet.betOptions);
    }, [bet]);

    const onRowAdd = async (newData) => {
        await updateBet(bet.id, {...bet, betOptions: [...options, newData]});
        const bets = await refreshBets();
        setOptions(bets.find(b=>b.id===bet.id).betOptions);
        messageHandling("success", "Successfuly added new option");
    };

    const onRowUpdate = async (newData) => {
        await updateBet(bet.id, {...bet, betOptions: options.map(o=>o.id===newData.id ? newData : o) });
        const bets = await refreshBets();
        setOptions(bets.find(b=>b.id===bet.id).betOptions);
        messageHandling("success", "Successfuly updated option");
    };

    const onRowDelete = async (data) => {
        await deleteBetOption(bet.id, data.id);
        const bets = await refreshBets();
        setOptions(bets.find(b=>b.id===bet.id).betOptions);
        messageHandling("success", "Successfuly deleted option");
   };

    const onFinish = async (e, option) => {
        await finishBet(bet.id, option.id);
        await refreshBets();
        messageHandling("success", "Successfuly finished bet");
        closeModal();
    };

    const getColumns = () => {
        const columns = [
            { title: "Title", field: "title" },
        ];
        if (bet.isFinished) {
            columns.push({ title: "Money in pool", field: "moneySum"});
        }
        return columns;
    };
    
    const getRowColor = (row) => {
        if (!bet.isFinished) {
            return "";
        }
       return row.isWinner ? "#E9FCD4" : "#F44949";
    };

    const getWinnerList = () => {
        return Object.values(offers?.reduce((acc, offer) => ({...acc, [offer.user.id]: offer.user}), {}) ?? {});
    };
    const renderStatistic = () => {
        return (
            <>
                <hr />
                <h4>Bet statistics:</h4>
                <div> Winner bet: 
                    <strong> {options?.find(o=>o.isWinner)?.title} </strong>
                </div>
                <div> Total sum accumilated: 
                    <strong> {offers?.reduce((acc, offer) => acc + offer.amount, 0)} </strong>
                    Vacius coin
                </div>
                <div> Winners:
                    <ul>
                         {getWinnerList().map((user) => (<li> {`${user.name} ${user.surname}`}</li>))}
                    </ul>
                </div>
            </>
        )
    }

    return(
        <>
            <MaterialTable
                className="material-table"
                columns={getColumns()}
                title="Options"
                isLoading={false}
                data={options?.map((o)=>(
                    {
                        ...o, 
                        moneySum: offers?.reduce((acc, offer) => offer.betOptionId === o.id ? acc + offer.amount : acc, 0),
                    }))
                }
                icons={!bet.isFinished &&  {
                    Add: props => <AddIcon />,
                    Edit: props => <EditIcon />,
                    Delete: props => <DeleteIcon />,
                    Clear: props => <DeleteIcon />,
                    Check: props => <CheckIcon />,
                    Search: props => <SearchIcon />,
                    ResetSearch: props => <DeleteIcon />,
                  }}
                editable={!bet.isFinished && 
                    {
                        onRowAdd: onRowAdd,
                        onRowUpdate: onRowUpdate,
                        onRowDelete: onRowDelete,
                    }
                }
                actions={!bet.isFinished && [
                    {
                        icon: 'my_location',
                        tooltip: 'finish bet',
                        onClick: (e, option) => onFinish(e, option)
                    }
                ]}
                options={{
                    rowStyle: (rowData) => ({
                        backgroundColor: getRowColor(rowData),
                    }),
                }}   
            />
            {bet.isFinished && renderStatistic()}
        </>
        
        
    );
};

export default OptionsTable;