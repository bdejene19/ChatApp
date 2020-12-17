import React from 'react'
import {AvailableChatRooms} from './styledComponents';
import {Typography, Button} from '@material-ui/core';

export default function ChatRooms(props) {
    return (
        <AvailableChatRooms>
            <nav>
                <Typography variant='h2' id='app-name'>CheckBox</Typography>
                <Typography variant='body1' className='activity'>Currently: Active</Typography>

            </nav>
                

            <div className='welcome-user'>
                Welcome {props.chatUsername} <br></br>
                <Button variant='contained'>Make a New Chat Room!</Button>
            </div>
            
            <div className='roomsToJoin'>
                <form id='availableRooms'>
                    <label for='rooms'>Available Rooms</label>
                    <select id='rooms'>
                        <option value={props.chatRoomName}>{props.chatRoomName}</option>
                    </select> 
                    <br></br>
                    <Button>Join Room</Button>
                </form>

            </div>
            
                
        </AvailableChatRooms>
    )
}
