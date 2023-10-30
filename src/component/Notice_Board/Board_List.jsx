import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  margin: 0 10px;
  display: grid;
  grid-template-columns: 80% 20%;
  padding: 0;
  box-sizing: border-box;
  border-bottom: 1px solid #C7CAD1;
  cursor: pointer;
`

const Title = styled.p`
  font-size: 18px;
  color: black;
  text-align: start;
  padding-left: 10px;
`

const Time = styled.p`
  font-size: 18px;
  color: #737579;
  text-align: center;
`

const Board_List = ({title, time}) => {
    return(
        <List>
            <Title>{title}</Title>
            <Time>{time}</Time>
        </List>
    )
}

export default Board_List;