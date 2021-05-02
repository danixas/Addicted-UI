import MaterialTable from "material-table";
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import MainContainer from "../../components/MainContainer";
import UsersTable from "./components/table";
import UserForm from "./components/form";
import {getUsers} from "../../api";
class Users extends Component {
    state = {
        isOpen: false,
        users: null,
    };

    componentDidMount = async () => {
        const users = await getUsers();

        this.setState({ users: users.data });
    }

    toggleFormStatus = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    };

    onUsersChange = (user) => {
        const {users} = this.state;
        this.setState({
            users: users.map(u => u.id === user.id ? user : u).concat(users.find(u => u.id === user.id) ? [] : [user]),
        });
    };

    render() {
        const { isOpen, users } = this.state;

        return (
            <MainContainer>
                <Button onClick={this.toggleFormStatus}>
                    Add User
                </Button>
                <UsersTable 
                    users={users}
                    isLoading={users === null}
                    onUsersChange={this.onUsersChange}
                />
                 <Modal show={isOpen} onHide={this.toggleFormStatus}>
                    <Modal.Header closeButton>
                        <Modal.Title> Add New User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <UserForm 
                            onUsersChange={this.onUsersChange}
                        />
                    </Modal.Body>
                </Modal>
            </MainContainer>
        )

    }
}


export default Users;