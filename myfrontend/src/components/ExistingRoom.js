import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const SingleRoomWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
`;

export default function ExistingRoom(props) { 
    return (
        <SingleRoomWrapper>
            <div className='room-holder'>
                {props.roomOwnerAvatarImg}
            </div>

            <div>
                <Typography variant='body1'>{props.existingRoomName}</Typography>
            </div>

            <div>
                <Typography variant='body1'>{props.numberOfMembersInRoom}</Typography>
            </div>
        </SingleRoomWrapper>
    )
}