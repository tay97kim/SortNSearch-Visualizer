import styled from 'styled-components';

export const Button = styled.p`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    disabled: false;
    &:hover{
        color: green;
    }
`

export const Button2 = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    disabled: false;
    &:hover{
        color: green;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    height: 200px;
    width: 100%;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;
    height: 140px;
    width: 100%;
    background-color: #77E000;
    padding-top:20px;
`

export const ControlWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
    height: 70px;
    width: 100%;
    background-color: #1CD90B;
    margin-top: 0px;
    padding-top: 0px;
`

export const SortWrapper = styled.div`
    display: flex;
    width: 35%;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;
`

export const SearchWrapper = styled.div`
    display: flex;
    width: 15%;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;
`

export const SpeedWrapper = styled.div`
    width: 100px;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    margin-top: 10px;
`

export const SpeedContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;
    height: 70px;
    width: 200px;
    margin-left: 20px;
`

export const SpanWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    margin-top:20px;
    line-height: 30%;
`

export const CheckBox = styled.div`
    margin-top:12px;
    zoom:1.5;
    div[class="sidebar"]{
        width:100px;
        height: 60%;
        background:#D6D4D2;
        position:fixed;
        top:150px;
        right:-100px;
        z-index:1;
        transition: all .35s;
        font-size: 11px;
        word-break:keep-all;
        overflow:auto;
        line-height: 140%;
    }

    .sidebar::-webkit-scrollbar {
        display: none;
    }

    input[id="searchHistory"]:checked+label+div{
        right:0;
        Container-width:78%;
    }
`

export const CountContainer = styled.div`
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;
    height: 50px;
    width: 150px;
    margin-left: 20px;
    margin-top:20px;
`
