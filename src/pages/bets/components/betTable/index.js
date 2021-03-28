import { React } from 'react';
import { Table, Button, Dropdown } from 'react-bootstrap';
import "./styles.scss"

const BetTable = ({bets}) => {
    const deletebet = () => {

    }
    const editBet = () => {

    }
    return(
        <div className="table">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Bet options</th>
                        <th>Start time</th>
                        <th>End time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bets.map((bet) =>
                        (
                            <tr>
                                <td>{bet.title}</td>
                                <td>{bet.description}</td>
                                <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        options
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {
                                            bet.betOptions.map((option) =>(
                                                <Dropdown.Item >{option.title}</Dropdown.Item>
                                            ))
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                                </td>
                                <td>{bet.dateStart}</td>
                                <td>{bet.dateEnd}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
        
        
    );
};

export default BetTable;