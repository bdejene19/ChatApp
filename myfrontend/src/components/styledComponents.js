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
