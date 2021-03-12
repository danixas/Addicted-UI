import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";

const Login = () => {
    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>Welcome to KTU Addicted</h1>
            <Form onSubmit={onFormSubmit}>
                <Form.Group>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password" name="password" placeholder="Password" />
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
