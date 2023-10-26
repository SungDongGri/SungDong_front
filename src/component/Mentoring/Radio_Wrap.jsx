import React from 'react';
import styled from 'styled-components';

const RadioWrap = styled.div`
  display: flex;
`

const RadioLabelWrap = styled.div``

const Input = styled.input`
  margin: 0 15px;
`

const Radio_Wrap = ({ radio1, radio2 }) => {
    return(
        <RadioWrap>
            <RadioLabelWrap>
                <Input type="radio" name={radio1} value={radio1} checked="checked" />
                <label for={radio1}>{radio1}</label>
            </RadioLabelWrap>
            <RadioLabelWrap>
                <Input type="radio" name={radio2} value={radio2} />
                <label for={radio2}>{radio2}</label>
            </RadioLabelWrap>
        </RadioWrap>
    )
}

export default Radio_Wrap;