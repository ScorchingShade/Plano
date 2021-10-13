import React, { useState } from "react";
import classes from "./signin.module.css";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";
import Link from "next/link";

function Signin() {
  const user = {
    email: "",
    password: "",
  };
  let errors = [];

  const [userState, setuserState] = useState(user);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, seterrorState] = useState(errors);

  function delay(t, v) {
    return new Promise(function(resolve) { 
        setTimeout(resolve.bind(null, v), t)
    });
 }

  const onSubmit = (e) => {
    e.preventDefault();
    seterrorState(() => []);
    if (checkForm()) {
        setIsLoading(true);

       delay(1000).then(() => {
            setIsLoading(false);
            console.log(userState);
          }) .catch((servererror) => {
            setIsLoading(false);
            seterrorState((error) => error.concat(servererror));
            console.error(servererror);
          });
    
         
      } else {
      }
  };


  const handleInput = (event) => {
    let target = event.target;
    

    setuserState((currentState) => {
      let currentUser = { ...currentState };
      currentUser[target.name] = target.value;
      return currentUser;
    });
    
  };

  const isFormEmpty = () => {
    return !userState.password.length || !userState.email.length;
  };

  const checkForm = () => {
    if (isFormEmpty()) {
      seterrorState((error) =>
        error.concat({ message: "Please fill in all fields" })
      );
      return false;
    }
    return true;
  };

  const formaterrors = () => {
    return errorState.map((error, index) => <p key={index}>{error.message}</p>);
  };


  return (
    <Grid
      verticalAlign="middle"
      textAlign="center"
      className={classes.gridForm}
    >
      <Grid.Column style={{ maxWidth: "35rem" }} className={classes.gridColumn}>
        <Header icon as="h1">
          <Icon name="user circle" />
          Login
        </Header>
        <Form onSubmit={onSubmit}>
          <Segment stacked>
            {/* name and value needs to be the same as specified in the state json object */}

            <Form.Input
              value={userState.email}
              name="email"
              icon="mail"
              iconPosition="left"
              type="email"
              placeholder="User Email"
              onChange={handleInput}
            />

            <Form.Input
              value={userState.password}
              name="password"
              icon="lock"
              iconPosition="left"
              onChange={handleInput}
              type="password"
              placeholder="User Password"
            />
          </Segment>
          <Button
            className={classes.btnSubmit}
            disabled={isLoading}
            loading={isLoading}
          >
            Login
          </Button>
        </Form>
        {errorState.length > 0 && (
          <Message error>
            <h3>Errors</h3>
            {formaterrors()}
          </Message>
        )}

        <Message>
          Not a User?<Link href="../auth/signup"> Sign up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Signin;
