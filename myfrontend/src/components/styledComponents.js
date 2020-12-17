import styled from 'styled-components';

export const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 5%;

    .edit-username {
        cursor: pointer;
    }

    #avatar { 
        height: 20vh;
        width: 10vw;
    }
`;


export const ChatImgOptionWrapper = styled.div`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    display: none;
    grid-gap: 0;
    position: absolute;
    z-index: 1;
    grid-gap: 1em;
  
    border: solid black 3px;


    img {
        width: 18vw;
        height: 25vh
    }
`;


export const AvailableChatRooms = styled.div`
    width: 75vw;
    height: 80vh;
    border: solid black 2px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 0;
    margin: 0;


    nav {
        grid-row: 1;
        grid-column: 1/4;
        height: fit-content;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: auto;
        border-bottom: solid black 3px;
    }
    #app-name {
        grid-row: 1;
        grid-column: 1;
    }

    .activity {
        grid-row: 1;
        justify-self: right;
        margin-right: 5%;
        grid-column: 3;
    }


    .welcome-user {
        grid-row: 2;
        grid-column: 1;
        height: max-content;
        display: flex;
        flex-direction: column;
        border: solid black 3px;
        button {
            width: 50%;
        }

    }

    .roomsToJoin {
        grid-row: 2;
        grid-column: 2;
        justify-content: center;
        text-align: center;
    }

    #availableRooms {

    }
`;



