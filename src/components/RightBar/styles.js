import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    
    background: white;
    height: 100%;
    width: 20%;
    margin: 40px 20px;
    border: 1px solid lightgray;
    border-radius: 2px;

`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    width: 100%;
    height: 5%;
    border-bottom: 1px solid lightgray;
    h4 {
        color: #d46a00;
    }

`;

