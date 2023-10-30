import React from 'react';
import styled from 'styled-components';
import Header from '../../component/Header/Header';

const Container = styled.div`
  width: 100vw;
`

const Login = () => {
    return(
        <Container>
            <Header />
        </Container>
    )
}

export default Login;