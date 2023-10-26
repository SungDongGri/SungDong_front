import React from 'react';
import styled from 'styled-components';

const Period_Wrap = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: 100px 200px;
  margin: 5px 0;
`

const Time = styled.p`
  color: black;
  font-weight: 500;
  margin: 0;
`

const Title = styled.p`
  color: #737579;
  font-weight: 500;
  margin: 0;
`

const Mentoring_Period = ({title, period}) => {
    return(
        <Period_Wrap>
            <Title>{title}</Title>
            <Time>{period}</Time>
        </Period_Wrap>
    )
}

export default Mentoring_Period;