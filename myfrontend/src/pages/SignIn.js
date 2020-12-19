import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import { AvatarWrapper, ChatImgOptionWrapper } from '../components/styledComponents';
import { Redirect, Router, Route, useHistory } from 'react-router-dom';
import AvailableChatRooms from './AvailableRooms';

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

const changeUserIcon = () => {
  document.getElementById('usericon-option').style.display = 'grid';
}


export default function SignIn() {
  const classes = useStyles();
  const [chatUserIcon, setUserIcon] = useState(<LockOutlinedIcon/>);
  const [username, setUsername] = useState("");

  const selectImg = (imageSelected) => {
    const chosenImg = document.getElementById(imageSelected);
    document.getElementById("usericon-option").style.display = "none";
    setUserIcon(<img src={chosenImg.src} alt={chosenImg.alt}></img>);
  }
  let history = useHistory();


  // figure out how to do a post fetch request
  function submitForm() {
     fetch('/chatRooms', {
      method: "POST",
      body: JSON.stringify({
        // remember to put the name of you fields in quotation marks => or else does not recognize
        chatUsername: username,
        // figure out avatar img problem for post request => basically add state to hold img src and store in DB
        // avatarImg: chatUserIcon,
      }),
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      }
     
    });
    history.push('/chatRooms');
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <ChatImgOptionWrapper id='usericon-option'>
            <div>
              <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png" alt='user icon' id='img1' onClick={() => selectImg('img1')}></img>
            </div>
            <div>
            <img src="https://www.svgrepo.com/show/65059/woman.svg" alt='user icon' id='img2' onClick={() => selectImg('img2')}></img>
            </div>
      
            <div>
              <img src="https://www.svgrepo.com/show/6741/woman.svg" alt='user icon' id='img3' onClick={() => selectImg('img3')}></img>
            </div>

            <div>
              <img src="https://thumbs.dreamstime.com/z/old-man-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602443.jpg" alt='user icon' id='img4' onClick={() => selectImg('img4')}></img>
            </div>

            <div>
              <img src="https://thumbs.dreamstime.com/z/businessman-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602644.jpg" alt='user icon' id='img5' onClick={() => selectImg('img5')}></img>
            </div>

            <div>
              <img src="https://www.svgrepo.com/show/135102/indian.svg" alt='user icon' id='img6' onClick={() => selectImg('img6')}></img>
            </div>
            <div>
              <img src="https://www.svgrepo.com/show/31050/man.svg" alt='user icon' id='img7' onClick={() => selectImg('img7')}></img>
            </div>
            <div>
              <img src="https://www.svgrepo.com/show/18986/african.svg" alt='user icon' id='img8' onClick={() => selectImg('img8')}></img>
            </div>

            <div>
            <img src="https://www.svgrepo.com/show/16084/doctor.svg" alt='user icon' id='img9' onClick={() => selectImg('img9')}></img>

            </div>
        </ChatImgOptionWrapper>
        <AvatarWrapper>
          <Avatar className={classes.avatar} id='avatar'>
            {/* <LockOutlinedIcon /> */}
            {chatUserIcon}
          </Avatar>
          <EditIcon onClick={() => changeUserIcon()} className='edit-username'></EditIcon>
        </AvatarWrapper>

        <Typography component="h1" variant="h5">
          Sign in 
        </Typography>
        <form className={classes.form} noValidate id='chat-form' action='/chatRooms' method="POST">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="chatUsername"
            label="Chat Username"
            value={username}
            name="chatUsername"
            autoComplete="chatUsername"
            autoFocus
            onChange={e => setUsername(e.target.value)}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          
          {/* <Link to='/chatRooms'> */}
            <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // submitForm function should submit input field STATE value and send to back end using fetch request
                // after awaiting response, will then send to /chatRooms page

                onClick={() => submitForm()}
              >
                Join a Chat Room
              </Button> 

          {/* </Link> */}
                     
        </form>
      </div>
    </Container>
  )
}