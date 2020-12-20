import React, { useState} from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';


const CreateChatRoomWrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: space-around;
    justify-items: center;

    #createChat-form {
        width: 60%;
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

export default function CreateChatRoom() {
    const classes = useStyles();;
    const [newRoomName, setNewRoomName] = useState("");
    const [roomPassword, setRoomPassword] = useState("");
    const [pswdIsRequired, setPasswordIsRequired] = useState(false);

    return (
        <CreateChatRoomWrapper>
            <Typography component='h3' variant='h4'>Create your room</Typography>
            <form className={classes.form} noValidate id='createChat-form' action='/chatRooms' method="POST">
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

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="roomPassword"
                    label="Room Password"
                    value={roomPassword}
                    name="roomPassword"
                    autoComplete="roomPassword"
                    autoFocus
                    onChange={e => setRoomPassword(e.target.value)}
                />        

                <FormControlLabel
                    control={<Checkbox value="Password" color="primary" />}
                    label="Require Room Password"
                />
                
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    // onClick={() => submitForm()}
                >
                    Create GroupChat!
                </Button> 

                
                        
            </form>
        </CreateChatRoomWrapper>
    )
}
