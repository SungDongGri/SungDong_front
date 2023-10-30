import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/Header/Header';
import Title from '../../component/Title_Wrap/Title_Box';
import Footer from '../../component/Footer/Footer';

const Container = styled.div`
  width: 100vw;
`

const SelectTitle = styled.h3`
  margin: 30px 20vw 0 20vw;
`

const SelectWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20vw;
  margin: 10px 0;
`

const MentoBox = styled.div`
  width: 48%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0AAAEF;
  color: white; 
  cursor: pointer;
  border-radius: 8px;
  font-weight: bolder;
  font-size: 20px;
`

const MentiBox = styled.div`
  width: 48%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C6EEFF;
  color: #0AAAEF;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bolder;  
  font-size: 20px;
`

const IntroBox = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`

const Mentoring = () => {
    const navigate = useNavigate();

    return(
        <Container>
            <Header />
            <Title subTitle="입시 플래닝 노하우를 전달하는" mainTitle="멘토링" />
            <SelectTitle>멘토링 신청</SelectTitle>
            <SelectWrap>
                <MentoBox onClick={()=>navigate('/Apply_Mento')}>멘토 지원</MentoBox>
                <MentiBox onClick={()=>navigate('/Apply_Menti')}>멘티 신청</MentiBox>
            </SelectWrap>
            <SelectTitle>성동구 멘토링 소개</SelectTitle>
            <IntroBox>
                설명 등등
            </IntroBox>
            <Footer />
        </Container>
    )
}

export default Mentoring;