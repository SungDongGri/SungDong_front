import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/Header/Header';
import List from '../../component/Mentoring/List_Box';
import Input from '../../component/Join/Input';
import Footer from '../../component/Footer/Footer';

const Container = styled.div`
  width: 100vw;
`

const MypageWrap = styled.div`
  margin: 0 30vw;
`

const MypageTitle = styled.h3`
  margin: 20px 0;
  font-size: 23px;
  font-weight: 500;
`

const ProgramNav = styled.div`
  display: flex;
  justify-content: space-between;
`

const Mentoring = styled.div`
  width: 49%;
  height: 70px;
  color: #1C1C1C;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${props => (props.active ? '#0AAAEF' : 'transparent')};
`

const EditInfo = styled.div`
  width: 49%;
  height: 70px;
  color: #1C1C1C;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MentoWrap = styled.div``

const MentoListTitle = styled.div`
  margin: 40px 0 10px 0;
  color: #737978;
  font-size: 16px;
  font-weight: 600;
`

const MentoListTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
  border-bottom: 1px solid #000000;
`

const Date = styled.div`
  width: 120px;
  font-size: 17px;
  color: #737978;
  font-weight: 600;
  text-align: center;
`

const Result = styled.div`
  width: 120px;
  font-size: 17px;
  color: #737978;
  font-weight: 600;
  text-align: center;
`

const Detail = styled.div`
  width: 120px;
  font-size: 17px;
  color: #737978;
  font-weight: 600;
  text-align: center;
`

const NoList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #C7CAD1;
  height: 100px;
  font-size: 20px;
  font-weight: 500;
`

const EditInfoWrap = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 50px 120px 50px 60px;
  box-sizing: border-box;
`

const InputName= styled.div`
  color: #737978;
  margin: 10px 0 5px 0;
  font-size: 16px;
  font-weight: 500;
`

const Mypage = () => {
    const [tabName, showTabName] = useState('mentoring');

    return(
        <Container>
            <Header />
            <MypageWrap>
                <MypageTitle>마이페이지</MypageTitle>
                <ProgramNav>
                    <Mentoring
                        active={tabName === 'mentoring'}
                        onClick={() => showTabName('mentoring')}
                    >
                        나의 멘토링
                    </Mentoring>
                    <Mentoring
                        active={tabName === 'mypage'}
                        onClick={() => showTabName('mypage')}
                    >
                        회원정보 수정
                    </Mentoring>
                </ProgramNav>
            { tabName == 'mypage' ?
                <EditInfoWrap>
                    <InputName>이름</InputName>
                    <Input type='text' holder='이름를 입력하세요' />
                    <InputName>아이디</InputName>
                    <Input type='text' holder='아이디를 입력하세요'/>
                    <InputName>비밀번호</InputName>
                    <Input type='password' holder='영문, 숫자, 특수 기호 포함 8자 이상' button='비밀번호 변경'/>
                    <InputName>비밀번호 확인</InputName>
                    <Input type='password' holder='영문, 숫자, 특수 기호 포함 8자 이상'/>
                    <InputName>연락처</InputName>
                    <Input type='text' holder="'-' 없이 기입. ex) 01012345678"/>
                    <InputName>이메일</InputName>
                    <Input type='text' holder="ex) example@email.com"/>
                    <InputName>주소</InputName>
                    <Input type='text' holder="서울시 성동구" button='주소 검색'/>
                </EditInfoWrap>
                :
                <>
                    <MentoWrap>
                        <MentoListTitle>멘토 지원 내역</MentoListTitle>
                        <MentoListTop>
                            <Date>지원 날짜</Date>
                            <Result>지원 결과</Result>
                            <Detail>상세 보기</Detail>
                        </MentoListTop>
                        <List ing='true' name='2023년 2기' date='10/19' result='선발완료' detail='상세보기' />
                        <List ing='false' name='2023년 2기' date='10/19' result='선발완료' detail='상세보기' />
                        <List ing='false' name='2023년 2기' date='10/19' result='선발완료' detail='상세보기' />
                    </MentoWrap>
                    <MentoWrap>
                        <MentoListTitle>멘티 지원 내역</MentoListTitle>
                        <MentoListTop>
                        <Date>지원 날짜</Date>
                        <Result>지원 결과</Result>
                        <Detail>상세 보기</Detail>
                        </MentoListTop>
                        <NoList>맨티 지원 내역이 없습니다.</NoList>
                    </MentoWrap>
                </>
            }
            </MypageWrap>
        </Container>
    )
}

export default Mypage;