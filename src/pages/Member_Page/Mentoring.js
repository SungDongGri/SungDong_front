import React from 'react';
import styled from 'styled-components';
import Header from '../../component/Header/Header';
import Title from '../../component/Title_Wrap/Title_Box';
import Period from '../../component/Mentoring/Mentoring_Period';
import Input from '../../component/Mentoring/Input_Wrap';
import TextArea from '../../component/Mentoring/TextArea_Wrap';
import Radio from '../../component/Mentoring/Radio_Wrap';
import Footer from '../../component/Footer/Footer';

const Container = styled.div`
  width: 100vw;
`

const MentoringWrap = styled.div`
  background-color: #F2F2F2;
  padding: 20px 15vw;
`

const MentoringTopCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MentoringTitle = styled.div`
  font-size: 35px;
  font-weight: 800;
  line-height: 55px;
`

const MentoringPeriod = styled.div`
  display: flex;
  flex-direction: column;
`

const ApplicationTitle = styled.h3`
  margin-top: 30px;
`

const ApplicationWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  padding: 20px 30px;
  box-sizing: border-box;
`

const InputWrap = styled.div`
  display: flex;
`
const Mentoring = () => {
    return(
        <Container>
            <Header />
            <Title subTitle="어쩌구저쩌구" mainTitle="멘토 지원하기"/>
            <MentoringWrap>
                <MentoringTopCard>
                    <MentoringTitle>2023년<br/>3기 멘토를<br/>모집합니다</MentoringTitle>
                    <MentoringPeriod>
                        <Period title="지원 기간" period="2023.10.20 - 2023.10.31" />
                        <Period title="1차 결과" period="2023.10.25" />
                        <Period title="2차 심사" period="2023.10.31" />
                        <Period title="활동 기간" period="2023.10.20 - 2023.10.31" />
                    </MentoringPeriod>
                </MentoringTopCard>
                <ApplicationTitle>지원서 작성</ApplicationTitle>
                <ApplicationWrap>
                    <Input name="이름" holder="입력" />
                    <InputWrap>
                        <Input name="나이" holder="입력" radio1="남" radio2="여" />
                    </InputWrap>
                    <InputWrap>
                        <Input name="학교" holder="입력" radio1="재학중" radio2="휴학/졸업" />
                    </InputWrap>
                    <Input name="재학증명서" holder="pdf,jpg,png 파일 업로드, 최대 1mb" />
                    <Input name="멘토링 희망 분야" holder="희망분야를 선택해주세요" />
                    <TextArea name="자기소개" holder="자기소개를 입력하세요" />
                </ApplicationWrap>
                <Footer />
            </MentoringWrap>
        </Container>
    )
}

export default Mentoring;