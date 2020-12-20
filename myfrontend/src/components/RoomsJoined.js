import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core'

const RoomsJoinedWrapper = styled.div`
    width: 100%;
    height: 12.5vh;
    display: flex;
    flex-direction: row;

    img {
        height: 9vh;
    }

    .chatName-message {
        display: flex;
        flex-direction: column;

    }
    
`;

export default function RoomsJoined(props) {
    return (
        <RoomsJoinedWrapper>
            <div>
                <img src='https://myincrediblerecipes.com/wp-content/uploads/2019/12/DSC_4487-scaled.jpg' alt='most recent message avatar'></img>
            </div>

            <div className='chatName-message'>
                <Typography component='h2' variant='h4' className='message-header'>{props.mostRecentMessageUser}</Typography>
                <Typography component='body1' variant='h6'>{props.userMessage}</Typography>
            </div>
        </RoomsJoinedWrapper>
    )
}
