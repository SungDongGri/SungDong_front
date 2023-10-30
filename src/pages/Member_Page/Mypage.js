import React from 'react';
import styled from 'styled-components';
import Header from '../../component/Header/Header';

const Container = styled.div`
  width: 100vw;
`

const Mypage = () => {
    return(
        <Container>
            <Header />
        </Container>
    )
}

export default Mypage;