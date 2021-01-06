import React, { useState } from 'react'
import {AvailableChatRooms} from '../components/styledComponents';
import {Typography, Button} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import styled from 'styled-components';
import RoomsJoined from '../components/RoomsJoined';


const UserGroupChatsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;


export default function ChatRooms() {
    const [activity, setActivity] = useState(<FiberManualRecordIcon id='activity-status' style={{color: "green"}}></FiberManualRecordIcon>);

    const [activeGroups, setGroupActivity] = useState([])


    // update activity state on both back and front tned
    const changeStatus = () => {
        var selectorOptions = document.getElementById('activity-states');
        var selectedValue = selectorOptions.options[selectorOptions.selectedIndex].value;
        if ( selectedValue === 'online') {
            setActivity(<FiberManualRecordIcon id='activity-status' style={{color: 'green'}}></FiberManualRecordIcon>)
        }
        if (selectedValue === 'offline') {
            setActivity(<FiberManualRecordIcon id='activity-status' style={{color: "lightgrey"}}></FiberManualRecordIcon>)
        }
        
        if (selectedValue === 'away') {
            setActivity(<FiberManualRecordIcon id='activity-status' style={{color: 'red'}}></FiberManualRecordIcon>)
        }
        
        if (selectedValue === 'busy') {
            setActivity(<FiberManualRecordIcon id='activity-status' style={{color: 'orange'}}></FiberManualRecordIcon>)
        }

        fetch('/changeStatus', {
            headers: {
                "accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({activityStatus: selectedValue}),
            method: "PUT"
        }).then(data => data.json()).then(res => res )
    }


    // figure out how to communicate joined group chats from backend to front end
    // also need to figure out a way to update frontend when this changes (i.e. when you join a groupchat or create a group chat)
    fetch('/myActiveChats').then(data => data.json()).then(res => res);


    

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
                    <UserGroupChatsWrapper>
                        <div className='group-activity'>
                        {activeGroups.length === 0 ? 
                            <Typography variant='h4'>Looks like you have no active Chats!</Typography>
                         : <div> <h1>your group chats are: </h1><br></br>{activeGroups}</div>}
                        </div>
                        

                    </UserGroupChatsWrapper>
                    {/* <Button variant='contained'>Make a New Chat Room!</Button> */}

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
                        
                        <Button variant="contained" href='../createChatRoom'>Create a Chat Room</Button>
                    </form>

                </div>
                <div id='testRun'>
                    Test Run
                </div>
            </div>
            
            
                
        </AvailableChatRooms>
    )
}
