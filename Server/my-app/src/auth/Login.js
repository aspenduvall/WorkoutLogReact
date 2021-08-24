import React, {useState} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"; //1

const Login = (props) => {
    const [username, setUsername] = useState(""); //2
    const [password, setPassword] = useState(""); //2

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/login", {
            method: "POST",
            body: JSON.stringify({user: {username: username, password: password}}),
            headers: new Headers ({
                "Content-Type": "application/json"
            })
        }) .then(
            (response) => response.json()
        ) .then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    );
};

export default Login;