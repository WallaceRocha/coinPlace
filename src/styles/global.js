import styled,{createGlobalStyle} from 'styled-components'


export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
       
    }

    body {
        font: 14px 'Roboto', sans-serif;
        background: #ecf1f2;
        color: #333;
        -webkit-web-smothing: antialiasing !important;
        
    }
`;

export const Container = styled.div ` 
        display: flex;
        flex-direction: row;
        height: 100%;
`;