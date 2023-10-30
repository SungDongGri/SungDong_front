import React from 'react';
import styled from 'styled-components';

const Title_Wrap = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  border-bottom: 1px solid black;
  padding: 10px 0;
`

const TitleText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: #737579;
  font-weight: 600;
`

const Board_Title = () => {
    return(
        <Title_Wrap>
            <TitleText>제목</TitleText>
            <TitleText>작성 시간</TitleText>
        </Title_Wrap>
    )
}

export default Board_Title;