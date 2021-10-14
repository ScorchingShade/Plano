import React, { useState } from 'react'
import classes from "./signup.module.css";
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


function Signup() {
    const user = {
        userName: "",
        email: "",
        password: "",
        confirmpassword: "",
      };
    
      let errors = [];
      
    
      const [userState, setuserState] = useState(user);
      const [errorState, seterrorState] = useState(errors);
      const [isLoading, setIsLoading] = useState(false);
      const [isSuccess, setIsSuccess] = useState(false);
    
      const handleInput = (event) => {
        let target = event.target;
    
        setuserState((currentState) => {
          let currentUser = { ...currentState };
          currentUser[target.name] = target.value;
          return currentUser;
        });
      };
    
      const isFormEmpty = () => {
        return (
          !userState.userName.length ||
          !userState.password.length ||
          !userState.confirmpassword.length ||
          !userState.email.length
        );
      };
    
      const checkPassword = () => {
        if (userState.password.length < 8) {
          seterrorState((error) =>
            error.concat({
              message: "Given password is not valid, lenght must be greater than 8",
            })
          );
          return false;
        } else if (userState.password !== userState.confirmpassword) {
          seterrorState((error) =>
            error.concat({ message: "Passwords do not match!" })
          );
          return false;
        }
    
        return true;
      };
    
      const checkForm = () => {
        if (isFormEmpty()) {
          seterrorState((error) =>
            error.concat({ message: "Please fill in all fields" })
          );
          return false;
        } else if (!checkPassword()) {
          return false;
        }
    
        return true;
      };
    
      const onSubmit = (event) => {
        seterrorState(() => []);
        setIsSuccess(false)
        if (checkForm()) {
          setIsLoading(true);
          firebase
            .auth()
            .createUserWithEmailAndPassword(userState.email, userState.password)
            .then((createUser) => {
              setIsLoading(false);
              updateuserDetails(createUser);
            })
            .catch((servererror) => {
              setIsLoading(false);
              seterrorState((error) => error.concat(servererror));
              console.error(servererror);
            });
        } else {
        }
      };
    
      const updateuserDetails = (createdUser) => {
        if (createdUser) {
          setIsLoading(true);
          createdUser.user
            .updateProfile({
              displayName: userState.userName,
              
              photoURL: `https://avatars.dicebear.com/api/bottts/${createdUser.user.uid}.svg`,
            })
            .then(() => {
              setIsLoading(false);
              saveUserInDB(createdUser);
            })
            .catch((servererror) => {
              setIsLoading(false);
              seterrorState((error) => error.concat(servererror));
            });
        }
      };
    
      const saveUserInDB = (createdUser) => {
        setIsLoading(true);
        userCollectionRef
          .child(createdUser.user.uid)
          .set({
            displayName: createdUser.user.displayName,
            photoURL: createdUser.user.photoURL,
            
          })
          .then(() => {
            setIsLoading(false);
            setIsSuccess(true);
          })
          .catch((servererror) => {
            setIsLoading(false);
            seterrorState((error) => error.concat(servererror));
          });
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
              <Icon name="user circle outline" />
              Sign up To Plano
            </Header>
            <Form onSubmit={onSubmit}>
              <Segment stacked>
                {/* name and value needs to be the same as specified in the state json object */}
                <Form.Input
                  name="userName"
                  value={userState.userName}
                  icon="user"
                  iconPosition="left"
                  onChange={handleInput}
                  type="text"
                  placeholder="User Name"
                />
    
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
    
                <Form.Input
                  value={userState.confirmpassword}
                  name="confirmpassword"
                  icon="lock"
                  iconPosition="left"
                  onChange={handleInput}
                  type="password"
                  placeholder="Confirm Password"
                />
              </Segment>
              <Button
                className={classes.btnSubmit}
                disabled={isLoading}
                loading={isLoading}
              >
                Submit
              </Button>
            </Form>
            {errorState.length > 0 && (
              <Message error>
                <h3>Errors</h3>
                {formaterrors()}
              </Message>
            )}
             { isSuccess && (
              <Message success>
                <h3>Successfully registered!</h3>
                {formaterrors()}
              </Message>
            )}
    
            <Message>
              Already an User? <Link href="../auth/signin">Login here!</Link>
            </Message>
          </Grid.Column>
        </Grid>)
}

export default Signup
