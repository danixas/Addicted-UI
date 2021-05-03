import { React, useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { Button, Modal } from "react-bootstrap";
import BetForm from './form';
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import SearchIcon from "@material-ui/icons/Search";
import { updateBet, deleteBetOption } from "../../../api";


const OptionsTable = ({bet, refreshBets}) => {
    const [isOpen, setOpen] = useState(false);
    const [isOptionsOpen, setOptionsOpen] = useState(false);
    const [options, setOptions] = useState(null);

    useEffect(() => {
        setOptions(bet.betOptions);
    }, [bet]);

    const onRowAdd = async (newData) => {
        await updateBet(bet.id, {...bet, betOptions: [...options, newData]});
        const bets = await refreshBets();
        setOptions(bets.find(b=>b.id===bet.id).betOptions);
    };

    const onRowUpdate = async (newData) => {
        await updateBet(bet.id, {...bet, betOptions: options.map(o=>o.id===newData.id ? newData : o) });
        const bets = await refreshBets();
        setOptions(bets.find(b=>b.id===bet.id).betOptions);
    };

    const onRowDelete = async (data) => {
        await deleteBetOption(bet.id, data.id);
        const bets = await refreshBets();
        setOptions(bets.find(b=>b.id===bet.id).betOptions);
   };

    return(
        <>
            <MaterialTable
                className="material-table"
                columns={[
                    { title: "Title", field: "title" },
                ]}
                title="Options"
                isLoading={false}
                data={options}
                icons={{
                    Add: props => <AddIcon />,
                    Edit: props => <EditIcon />,
                    Delete: props => <DeleteIcon />,
                    Clear: props => <DeleteIcon />,
                    Check: props => <CheckIcon />,
                    Search: props => <SearchIcon />,
                    ResetSearch: props => <DeleteIcon />
                  }}
                editable={
                    {
                        onRowAdd: onRowAdd,
                        onRowUpdate: onRowUpdate,
                        onRowDelete: onRowDelete,
                    }
                }
        
            />
        </>
        
        
    );
};

export default OptionsTable;