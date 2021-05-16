import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import axios from "../../axiosConfig";

const Login = () => {
    const history = useHistory();
    const [user, setUser] = useState({});
    const [errors, setErrors] = useState({});

    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            setErrors({})
            const role = await axios.post("authenticate/login", user, { withCredentials: true });
            localStorage.setItem("role", role.data.roleName);
            history.push("");
        } catch (e) {
            setErrors({ ...errors, password: "Invalid password" });
        }
    };

    const updateUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h1>Welcome to KTU Addicted</h1>
            <Form onSubmit={onFormSubmit}>
                <Form.Group>
                    <Form.Control
                        type="email"
                        name="Email"
                        placeholder="Enter email"
                        onChange={updateUser}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        type="password"
                        name="Password"
                        placeholder="Password"
                        onChange={updateUser}
                        required
                    />
                    {errors.password && (
                        <Form.Text className="text-danger float-left mt-2">
                            {errors.password}
                        </Form.Text>
                    )}
                    <a href="#" className="text-muted text-right mt-2">
                        Forgot your password
                    </a>
                </Form.Group>
                <Button variant="primary" type="submit" block>
                    Login
                </Button>
                <Button variant="secondary" onClick={() => history.push("register")} block>
                    Sign up
                </Button>
            </Form>
        </div>
    );
};

export default Login;
