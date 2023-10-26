import React from 'react';
import styled from 'styled-components';

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8vw;
  height: 240px;
  width: 100%;
  box-sizing: border-box;
  background-color: #606672;
`

const SubTitle = styled.p`
  color: white;
  font-size: 24px;
  margin: 0;
`

const MainTitle = styled.h1`
  color: white;
  font-size: 50px;
  margin: 15px 0 0 0;
`

const Title_Box = ({subTitle, mainTitle}) => {
    return(
        <TitleWrap>
            <SubTitle>{subTitle}</SubTitle>
            <MainTitle>{mainTitle}</MainTitle>
        </TitleWrap>
    )
}

export default Title_Box;