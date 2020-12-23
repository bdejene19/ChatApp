import React, { useState} from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';

const CreateChatRoomWrapper = styled.div`
    width: 100vw;
    grid-template-columns: auto;
    justify-content: space-around;
    justify-items: center;
    display: flex;
    justify-content: center;

    #createChat-form {
        width: 35%;
        border: solid lightgrey 5px;
        padding: 1em;
        border-radius: 2%;
        justify-content: center;
        box-shadow: 0 0 5px 5px slateblue;

    }
    #roomPswd-wrapper {
            display: none;
    }

`;

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const requirePassword = () => {
    let myCheckbox = document.getElementById('pswd-checkbox').checked;
    let pswdRequired = document.getElementById('roomPswd-wrapper');
    if (myCheckbox) {
        pswdRequired.style.display = 'block';        
    } else {
        pswdRequired.style.display = 'none';
    }
}




export default function CreateChatRoom() {
    const classes = useStyles();;
    const [newRoomName, setNewRoomName] = useState("");
    const [roomPassword, setRoomPassword] = useState("");
    const [pswdIsRequired, setPasswordIsRequired] = useState(false);

    let history = useHistory();

    const submitForm = () => {
        fetch('/createChatRoom', {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                roomName: newRoomName,
                roomPassword: roomPassword,
            })   
        })
        history.push('../chatRooms');
    }

    return (
        <CreateChatRoomWrapper>
            <form className={classes.form} noValidate id='createChat-form' action='/chatRooms' method="POST">
            <Typography component='h3' variant='h4'>Create your room</Typography>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="newRoomName"
                    label="Room Name"
                    value={newRoomName}
                    name="newRoomName"
                    autoComplete="newRoomName"
                    autoFocus
                    onChange={e => setNewRoomName(e.target.value)}
                />

                <div id='roomPswd-wrapper'>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        // required
                        fullWidth
                        id="roomPassword"
                        label="Room Password"
                        value={roomPassword}
                        name="roomPassword"
                        autoComplete="roomPassword"
                        autoFocus
                        onChange={e => setRoomPassword(e.target.value)}
                    />  
                </div> 
                     

                <FormControlLabel
                    control={<Checkbox value="Password" color="primary" id='pswd-checkbox' onClick={() => requirePassword()}/>}
                    label="Require room password"
                    
                />
                
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => submitForm()}
                >
                    Create GroupChat!
                </Button>            
            </form>
        </CreateChatRoomWrapper>
    )
}
