import { React } from 'react';
import { Table, Dropdown } from 'react-bootstrap';
import "./styles.scss"

const BetTable = ({bets}) => {
    
    const deletebet = () => {

    }
    const editBet = (bet) => {
         
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
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="dropdown color">
                                        options
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {
                                            bet.betOptions.map((option) => (
                                                <Dropdown.Item >{option}</Dropdown.Item>
                                            ))
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                                </td>
                                <td>{bet.dateStart}</td>
                                <td>{bet.dateEnd}</td>
                                <td><a href="#" onClick={(bet) => editBet(bet)}>edit</a></td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
        
        
    );
};

export default BetTable;