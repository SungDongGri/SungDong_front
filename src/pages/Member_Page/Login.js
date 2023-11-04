import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import LOGO from '../../img/mainLogo.svg';

const Container = styled.div`
  width: 100vw;
`

const LoginBox = styled.div`
  width: 500px;
  background-color: white;
  border: 1px solid #C6EEFF;
  border-radius: 16px;
  padding: 60px 40px;
  box-sizing: border-box;
  margin: 80px auto 100px auto;
`

const BoxTitle = styled.img`
  margin-left: 15px;
`

const LoginTitle = styled.h3`
  margin: 30px 0 10px 0;
`

const MemberBox = styled.div`
  display: flex;
  flex-direction: column;
`

const MemberHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 0;
`

const Name = styled.p`
  margin: 0;
  color: #737978;
`

const Forgot = styled.p`
  margin: 0;
  color: #737978;
  text-decoration: underline;
  cursor: pointer;
`

const Input = styled.input`
  height: 50px;
  background-color: #F1F7FA;
  border: none;
  border-radius: 8px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 15px;
`

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const LoginButton = styled.button`
  background-color: #0AAAEF;
  border: none;
  border-radius: 8px;
  height: 60px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 17px;
`

const JoinButton = styled.button`
  background-color: #F1F7FA;
  border: 1px solid #0AAAEF;
  border-radius: 8px;
  height: 60px;
  color: black;
  font-weight: 600;
  cursor: pointer;
  font-size: 17px;
`
const Login = () => {
    const navigate = useNavigate();
    return(
        <Container>
            <Header />
            <LoginBox>
                <BoxTitle src={LOGO}></BoxTitle>
                <LoginTitle>로그인</LoginTitle>
                <MemberBox>
                    <MemberHeader>
                        <Name>아이디</Name>
                        <Forgot>아이디를 잊으셨나요?</Forgot>
                    </MemberHeader>
                    <Input type='text' placeholder='아이디를 입력해주세요' />
                </MemberBox>
                <MemberBox>
                    <MemberHeader>
                        <Name>비밀번호</Name>
                        <Forgot>비밀번호를 잊으셨나요?</Forgot>
                    </MemberHeader>
                    <Input type='password' placeholder='비밀번호를 입력해주세요' />
                </MemberBox>
                <ButtonWrap>
                    <LoginButton>로그인하기</LoginButton>
                    <JoinButton onClick={() => navigate('/Join')}>회원가입하기</JoinButton>
                </ButtonWrap>
            </LoginBox>
            <Footer />
        </Container>
    )
}

export default Login;