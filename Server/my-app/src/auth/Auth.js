import React from "react";
import { Container, Row, Col} from "reactstrap"; //1
import Signup from "./Signup";
import Login from "./Login";

const Auth = (props) => { //2
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken} />
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
    );
};

export default Auth;