import React from "react";
import styled from 'styled-components';

export default function Main({ data }) {
    const width = 500 / data.length;
    var height = 4;

    if (data.length > 29) { //배열의 크기가 30보다 클 경우 숫자를 표시하지 않음(가독성 저하)
        if (data.length >= 100)
            height = 3;
        return (
            <Container>
                {data.map((size) => (
                    <Bar key={size} id={size} height={`${(size * height) + 20}px`} width={`${width}px`} />
                ))}
            </Container>
        );
    }
    else {
        return (
            <Container>
                {data.map((size) => (
                    <Bar key={size} id={size} height={`${(size * height) + 20}px`} width={`${width}px`}>{size}</Bar>
                ))}
            </Container >
        );
    }
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 85%;
    height: 220px;
    justify-content: space-evenly;
    margin-left: 50px;
    margin-right: 50px;
    padding-top: 250px;
    align-items: flex-end;
`

const Bar = styled.div`
    text-Align: center;
    font-weight: bold;
    width: ${props => props.width};
    height: ${props => props.height || '500px'};
    background-color: #33A5DE;
    margin - right: 2px;
`
