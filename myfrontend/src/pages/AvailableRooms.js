import React, { useState } from 'react'
import {AvailableChatRooms} from '../components/styledComponents';
import {Typography, Button} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function ChatRooms(props) {
    const [activity, setActivity] = useState(<FiberManualRecordIcon id='activity-status' style={{color: "green"}}></FiberManualRecordIcon>);

    const changeStatus = () => {
        var selectorOptions = document.getElementById('activity-states');
        var selectedValue = selectorOptions.options[selectorOptions.selectedIndex].value;
        if ( selectedValue === 'online') {
            setActivity(<FiberManualRecordIcon id='activity-status' style={{color: 'green'}}></FiberManualRecordIcon>)
        }
        if (selectedValue === 'offline') {
            setActivity(<FiberManualRecordIcon id='activity-status' style={{color: "lightgrey"}}></FiberManualRecordIcon>)
        }if (selectedValue === 'away') {
            setActivity(<FiberManualRecordIcon id='activity-status' style={{color: 'red'}}></FiberManualRecordIcon>)
        }if (selectedValue === 'busy') {
            setActivity(<FiberManualRecordIcon id='activity-status' style={{color: 'orange'}}></FiberManualRecordIcon>)
        }
    }

    return (
        <AvailableChatRooms>
            <div className='chatWrapper'>
                <nav>
                    <Typography variant='h2' id='app-name'>CheckBox</Typography>
                    <div className='activity'>
                        <Typography variant='body1' className='activity'>Currently: </Typography>
                        <select className='activity-options' id='activity-states' onChange={() => changeStatus()}>
                            <option value='online'>Online</option>
                            <option value='offline'>Offline</option>
                            <option value='away'>Away</option>
                            <option value='busy'>Busy</option>
                        </select>
                        {activity}
                    </div>
                </nav>
                    
                <div className='welcome-user'>
                    <h3>Welcome {props.chatUsername}</h3>
                    <Button variant='contained'>Make a New Chat Room!</Button>
                </div>
                
                <div className='roomsToJoin'>
                    <form id='availableRooms-form'>
                        <label for='room'>Available Rooms</label>
                        <div className="availableRoom-wrapper">
                            where a room will be
                        </div>
                        {/* <select id='rooms'>
                            <option value={props.chatRoomName}>{props.chatRoomName}</option>
                        </select> 
                        <br></br> */}
                        <Button variant="contained">Join Room</Button>
                    </form>

                </div>

            </div>
            
            
                
        </AvailableChatRooms>
    )
}
