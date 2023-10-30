import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LOGO from '../../img/mainLogo.svg';

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 8vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftHeaderWrap = styled.div`
  display: flex;
`

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`

const LogoImage = styled.img``

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 9vw;
`

const NavBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0px 20px;
  box-sizing: border-box;
`

const NavLink = styled.p`
  color: #737579;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`

const ButtonWrap = styled.div``

const LoginBtn = styled.button`
  border: 1px solid #606672;
  border-radius: 8px;
  color: #737579;
  width: 80px;
  height: 32px;
  font-size: 18px;
  font-weight: 600;
  background-color: white;
  cursor: pointer;
`


const Header = () => {
    const navigate = useNavigate();

    function moveHome(){
        navigate('/Home');
    }

    function moveMentoring(){
        navigate('/Mentoring');
    }

    function moveEducation(){
        navigate('/Education');
    }

    function moveProgram(){
        navigate('/Request_Program');
    }

    function moveMypage(){
        navigate('/Mypage');
    }

    function moveNotice(){
        navigate('/Notice');
    }

    function moveLogin(){
        navigate('/Login');
    }

    return(
        <Container>
            <LeftHeaderWrap>
                <LogoWrap>
                    <LogoImage src={LOGO} />
                </LogoWrap>
                <NavWrap>
                    <NavBox><NavLink onClick={moveHome}>Home</NavLink></NavBox>
                    <NavBox><NavLink onClick={moveMentoring}>멘토링</NavLink></NavBox>
                    <NavBox><NavLink onClick={moveEducation}>교육 프로그램</NavLink></NavBox>
                    <NavBox><NavLink onClick={moveProgram}>프로그램 요청</NavLink></NavBox>
                    <NavBox><NavLink onClick={moveMypage}>마이페이지</NavLink></NavBox>
                    <NavBox><NavLink onClick={moveNotice}>공지사항</NavLink></NavBox>
                </NavWrap>
            </LeftHeaderWrap>
            <ButtonWrap>
                <LoginBtn onClick={moveLogin}>로그인</LoginBtn>
            </ButtonWrap>
        </Container>
    )
}

export default Header;