import React from 'react';
import styled from 'styled-components';
import Header from '../../component/Header/Header';
import Back from '../../img/backBtn.svg';
import Input from '../../component/Join/Input';
import Footer from '../../component/Footer/Footer';

const Container = styled.div`
  width: 100vw;
`

const JoinBox = styled.div`
  width: 550px;
  background-color: white;
  border: 1px solid #C6EEFF;
  border-radius: 16px;
  padding: 20px 30px;
  box-sizing: border-box;
  margin: 40px auto 80px auto;
`

const BoxTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 20px;
`

const BackBtn = styled.img`
  position: absolute;
  left: 5px;
`

const BoxName = styled.div`
  margin-left: 70px;
  font-weight: 700;
`

const BoxBody = styled.div`
  width: 100%;
`

const Welcome = styled.p`
  margin: 20px 0;
  font-size: 17px;
  color: #1C1C1C;
`

const InputName= styled.div`
  color: #737978;
  margin: 10px 0 5px 0;
  font-size: 16px;
  font-weight: 500;
`

const Agree = styled.p`
  text-decoration: underline;
  color: #737978;
  cursor: pointer;
  margin: 10px auto;
  text-align: center;
`

const Button = styled.button`
  background-color: #0AAAEF;
  border: none;
  border-radius: 8px;
  height: 60px;
  width: 100%;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 17px;
`
const Join = () => {
    return(
        <Container>
            <Header />
            <JoinBox>
                <BoxTop>
                    <BackBtn src={Back} />
                    <BoxName>회원가입</BoxName>
                </BoxTop>
                <BoxBody>
                    <Welcome>Smart 성동 교육 파트너에 오신 것을 환영합니다.</Welcome>
                    <InputName>이름</InputName>
                    <Input type='text' holder='이름를 입력하세요' />
                    <InputName>아이디</InputName>
                    <Input type='text' holder='아이디를 입력하세요' button='중복 확인'/>
                    <InputName>비밀번호</InputName>
                    <Input type='password' holder='영문, 숫자, 특수 기호 포함 8자 이상'/>
                    <InputName>비밀번호 확인</InputName>
                    <Input type='password' holder='영문, 숫자, 특수 기호 포함 8자 이상'/>
                    <InputName>연락처</InputName>
                    <Input type='text' holder="'-' 없이 기입. ex) 01012345678"/>
                    <InputName>이메일</InputName>
                    <Input type='text' holder="ex) example@email.com"/>
                    <InputName>주소</InputName>
                    <Input type='text' holder="서울시 성동구" button='주소 검색'/>
                    <Agree>이용약관에 동의합니다.</Agree>
                    <Button>가입 완료</Button>
                </BoxBody>
            </JoinBox>
            <Footer />
        </Container>
    )
}

export default Join;