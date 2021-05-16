import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addUser, editUser } from "../../../api";
import { messageHandling } from '../../../utils/messageHandling';

const UserForm = ({ userData, onUsersChange, toggleModal, roles }) => {
    const [user, setUser] = useState(userData ? userData : {
        userName: "",
        name: "",
        surname: "",
        email: "",
        password: "",
    });

    const onChange = (event) => {
        const { name, value } = event.target;
        setUser({...user, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        let result = null;
        if (userData) {
            result = await editUser(userData.id, user);
            messageHandling("success", "Successfuly updated user");
        } else {
            result = await addUser(user);
            messageHandling("success", "Successfuly added new user");
        }
        toggleModal();
        onUsersChange(result.data);
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    name="userName"
                    onChange={onChange}
                    value={user.userName}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="name"
                    onChange={onChange}
                    value={user.name}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                    name="surname"
                    onChange={onChange}
                    value={user.surname}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={user.email}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" value={user.roleId} onChange={(e) => onChange({target: {name: "roleId", value: e.target.value}})}>
                    {
                        roles?.map(r => (
                            <option id={r.id} value={r.id}>{r.name}</option>
                        ))
                    }
                </Form.Control>
            </Form.Group>
            {!userData && (
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        onChange={onChange}
                        value={user.password}
                        required
                    />
                </Form.Group>
            )}
            <Button variant="primary" type="submit" >
                {userData ? "Update" : "Add" }
            </Button>
        </Form>
    )
}

export default UserForm;