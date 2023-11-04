import React, {useState} from 'react';
import styled from 'styled-components';
import Header from '../../component/Header/Header';
import Title from '../../component/Title_Wrap/Title_Box';
import Footer from '../../component/Footer/Footer';

const Container = styled.div`
  width: 100vw;
`

const EducationBody = styled.div`
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
`

const ProgramNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20vw;
`

const Tab = styled.div`
  margin-top: 20px;
  width: 49%;
  height: 80px;
  color: #1C1C1C;
  font-weight: 700;
  font-size: 19px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${props => (props.active ? '#0AAAEF' : 'transparent')};

`

const ProgramBoxWrap = styled.div`
  padding: 0 20vw;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;
`

const ProgramBox = styled.div`
  cursor: pointer;
  margin: 10px 0;
  width: 49%;
  height: 400px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Education = () => {
    const [tabName, showTabName] = useState('Sungdong');
    return(
        <Container>
            <Header />
            <Title subTitle="여러분을 위한 프로그램이 모두 모였다!" mainTitle="교육 프로그램"/>
            <EducationBody>
                <ProgramNav>
                    <Tab
                        active={tabName === 'Sungdong'}
                        onClick={() => showTabName('Sungdong')}
                    >
                        성동구
                    </Tab>
                    <Tab
                        active={tabName === 'Seoul'}
                        onClick={() => showTabName('Seoul')}
                    >
                        서울시
                    </Tab>
                </ProgramNav>
                { tabName === 'Sungdong' ?
                    <ProgramBoxWrap>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                    </ProgramBoxWrap>
                    :
                    <ProgramBoxWrap>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                        <ProgramBox>프로그램</ProgramBox>
                    </ProgramBoxWrap>
                }
            </EducationBody>
            <Footer />
        </Container>
    )
}

export default Education;