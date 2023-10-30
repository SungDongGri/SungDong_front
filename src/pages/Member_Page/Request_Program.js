import React from 'react';
import styled from 'styled-components';
import Header from '../../component/Header/Header';
import Title from '../../component/Title_Wrap/Title_Box';
import Footer from '../../component/Footer/Footer';

const Container = styled.div`
  width: 100vw;
`

const ProgramBody = styled.div`
  background-color: #FCFCFC;
  padding: 0 20vw 20px 20vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const ProgramCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border: none;
  border-radius: 12px;
  padding: 40px;
  box-sizing: border-box;
  margin: 30px 0;
`

const ProgramTitle = styled.h2``

const ProgramContent = styled.p`
  font-size: 18px;
`

const ProgramKeyWordWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const KeyWord = styled.div`
  margin: 0 10px;
  padding: 7px 15px;
  font-size: 18px;
  font-weight: 500;
  background-color: #F1F7FA;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

const Button = styled.button`
  background-color: #0AAAEF;
  width: 120px;
  height: 40px;
  margin: 50px auto 0 auto;
  color: white;
  font-size: 17px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

const Request_Program = () => {
    return(
        <Container>
            <Header />
            <Title subTitle='원하는 교육 프로그램이 있다면 알려주세요' mainTitle='프로그램 요청' />
            <ProgramBody>
                <ProgramCard>
                    <ProgramTitle>10월 희망조사</ProgramTitle>
                    <ProgramContent>
                        안녕하세요, 스마트 성동 교육 파트너입니다. <br/>
                        성동구에서 하반기 교육 프로그램 희망 조사를 실시합니다! 희망하는 프로그램에 투표해주세요 :)
                    </ProgramContent>
                    <ProgramKeyWordWrap>
                        <KeyWord>멘토링 프로그램</KeyWord>
                        <KeyWord>입시 설명회</KeyWord>
                        <KeyWord>학부모 상담</KeyWord>
                        <KeyWord>학생 상담</KeyWord>
                    </ProgramKeyWordWrap>
                    <Button>제출하기</Button>
                </ProgramCard>
            </ProgramBody>
            <Footer />
        </Container>
    )
}

export default Request_Program;