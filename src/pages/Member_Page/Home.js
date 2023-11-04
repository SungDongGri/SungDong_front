import React from 'react';
import styled from 'styled-components';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';

const Container = styled.div`
  width: 100vw;
`

const HomeTopBanner = styled.div`
  margin: 0 8vw;
  height: 400px;
  background-color: #0AAAEF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TopBannerText = styled.p`
  color: white;
  margin: 0;
`

const HomeBottomBanner = styled.div`
  margin: 0 8vw;
  height: 600px;
  background-color: #C7CAD1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BottomBannerText = styled.p`
  color: white;
  margin: 0;
`

const Home = () => {
    return(
        <Container>
            <Header />
            <HomeTopBanner>
                <TopBannerText>Banner</TopBannerText>
            </HomeTopBanner>
            <HomeBottomBanner>
                <BottomBannerText>Text</BottomBannerText>
            </HomeBottomBanner>
            <Footer />
        </Container>
    )
}

export default Home;