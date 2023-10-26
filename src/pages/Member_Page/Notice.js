import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/Header/Header';
import Title from '../../component/Title_Wrap/Title_Box';
import SearchBox from '../../component/Notice_Board/Search_Box';
import Board_Title from '../../component/Notice_Board/Board_Title';
import Board_List from '../../component/Notice_Board/Board_List';
import Footer from '../../component/Footer/Footer';

const Container = styled.div`
  width: 100vw;
`

const Notice_Body_Wrap = styled.div`
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  padding: 30px 15vw;
`

const Notice_Body_Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`

const Notice_Board = styled.div`
  margin-top: 30px;
`

const Notice_Title = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 0;
`

const Notice = () => {
    return(
        <Container>
            <Header />
            <Title subTitle="어쩌구저쩌구" mainTitle="공지사항"/>
            <Notice_Body_Wrap>
                <Notice_Body_Title>
                    <Notice_Title>공지사항</Notice_Title>
                    <SearchBox />
                </Notice_Body_Title>
                <Notice_Board>
                    <Board_Title />
                    <Board_List title="제목" time="2023-10-17" />
                    <Board_List title="제목" time="2023-10-17" />
                    <Board_List title="제목" time="2023-10-17" />
                    <Board_List title="제목" time="2023-10-17" />
                    <Board_List title="제목" time="2023-10-17" />
                    <Board_List title="제목" time="2023-10-17" />
                </Notice_Board>
            </Notice_Body_Wrap>
            <Footer />
        </Container>
    )
}

export default Notice;