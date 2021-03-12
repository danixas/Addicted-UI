import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";

const Register = () => {
    const history = useHistory()

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>Welcome to KTU Addicted</h1>
            <Form onFormSubmit={onFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Create Password" />
                </Form.Group>
                <p className="text-muted text-center agreement">By signing up, you confirm that you accept our <span>Terms of Use</span> and <span>Privacy policy</span></p>
                <Button variant="primary" type="submit" block>
                    Register
                </Button>
                <Button variant="secondary" type="submit" onClick={() => history.push('login')} block>
                    Back
                </Button>
            </Form>
        </div>
    );
};

export default Register;
