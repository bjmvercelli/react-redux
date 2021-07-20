import styled from 'styled-components';

export const Container = styled.div`
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 256px;
    text-align: center;
    border: 5px solid #fff;
    border-radius: 10px;
    background: #000;
    padding: 10px;
`

export const Keys = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(60px, auto);

    button {
        border-radius: 100%;
        margin: 4px;
        font-size: 20px;
        background-color: #303030;
        border: 0;
        color: white;
        width: 88%;
        transition: all 0.3s ease 0.05s;

        :hover {
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.4);
        }

    }

    .double {
        grid-column: 1/3; //https://www.youtube.com/watch?v=hpfDRnijdPE - 16:27
        border-radius: 500px;
        width: 93%;
    }
    
    .top-3 {
        background-color: #b3b3b3;
        color: black;

        :hover {
            background-color: rgb(255, 255, 255);
        }
    }

    .operator {
        background-color: #FF9500;

        :hover {
            background-color: rgba(255, 203, 130, 0.9);
        }
    }
    
`