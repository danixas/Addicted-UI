import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addUser, editUser } from "../../../api";

const UserForm = ({ userData, onUsersChange }) => {
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
        } else {
            result = await addUser(user);
        }
    
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