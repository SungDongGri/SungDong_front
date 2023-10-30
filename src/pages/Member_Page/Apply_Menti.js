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
  padding: 20px 20vw;
`

const IntroText = styled.div`
  color: #737978;
  margin: 20px 0;
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

const InputName = styled.p`
  font-weight: 500;
  color: #737978;
  margin: 10px 0;
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

const RadioWrap = styled.div`
  display: flex;
  color: #737978;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 15px;
`

const RadioLabelWrap = styled.div`
  margin-right: 15px;
`

const RadioInput = styled.input`
    margin-right: 5px;
`

const Label = styled.label``

const Button = styled.button`
  background-color: #0AAAEF;
  width: 180px;
  height: 45px;
  margin: 10px auto 0 auto;
  color: white;
  font-size: 17px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
const Apply_Menti = () => {
    return(
        <Container>
            <Header />
            <Title subTitle="어쩌구저쩌구" mainTitle="멘티 신청하기"/>
            <MentoringWrap>
                <IntroText>멘토링 > 멘티 신청</IntroText>
                <MentoringTopCard>
                    <MentoringTitle>2023년<br/>3기 멘티를<br/>모집합니다</MentoringTitle>
                    <MentoringPeriod>
                        <Period title="지원 기간" period="2023.10.20 - 2023.10.31" />
                        <Period title="1차 결과" period="2023.10.25" />
                        <Period title="2차 심사" period="2023.10.31" />
                        <Period title="활동 기간" period="2023.10.20 - 2023.10.31" />
                    </MentoringPeriod>
                </MentoringTopCard>
                <ApplicationTitle>지원서 작성</ApplicationTitle>
                <ApplicationWrap>
                    <InputName>신청자와의 관계</InputName>
                    <RadioWrap>
                        <RadioLabelWrap>
                            <RadioInput type="radio" name='student' value='student' />
                            <Label for='student'>학생 본인</Label>
                        </RadioLabelWrap>
                        <RadioLabelWrap>
                            <RadioInput type="radio" name='parent' value='parent' />
                            <Label for='parent'>부모님</Label>
                        </RadioLabelWrap>
                    </RadioWrap>
                    <Input name="이름" holder="입력" />
                    <InputWrap>
                        <Input name="나이" holder="입력" radio1="남" radio2="여" />
                    </InputWrap>
                    <InputWrap>
                        <Input name="학교" holder="입력" radio1="재학중" radio2="휴학/졸업" />
                    </InputWrap>
                    <InputWrap>
                        <Input name="재학증명서" holder="pdf,jpg,png 파일 업로드, 최대 1mb" button="업로드" />
                    </InputWrap>
                    <Input name="멘토링 희망 분야" holder="희망분야를 선택해주세요" />
                    <TextArea name="자기소개" holder="자기소개를 입력하세요" />
                    <Button>지원서 제출하기</Button>
                </ApplicationWrap>
                <Footer />
            </MentoringWrap>
        </Container>
    )
}

export default Apply_Menti;