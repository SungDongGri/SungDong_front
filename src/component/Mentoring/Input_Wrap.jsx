import React from 'react';
import styled from 'styled-components';

const InputBigWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const InputTwoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 5px 0 10px 0;
`

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 5px 0 10px 0;
`

const InputName = styled.p`
  margin: 0 0 8px 0;
`

const Input = styled.input`
  width: 35vw;
  height: 40px;
  padding: 0 10px;
  border-radius: 8px;
  background-color: #F2F2F2;
  border: none;
`

const RadioWrap = styled.div`
  display: flex; 
`

const RadioLabelWrap = styled.div``

const RadioInput = styled.input`
  margin: 50px 5px 0 30px;
`

const Label = styled.label`
  //padding-top: 30px;
`

const Input_Wrap = ({ name, holder, radio1, radio2 }) => {
    return(
        <>
        {  radio1 ?
                <InputBigWrap>
                    <InputTwoWrap>
                        <InputName>{ name }</InputName>
                        <Input placeholder={ holder }></Input>
                    </InputTwoWrap>
                    <RadioWrap>
                        <RadioLabelWrap>
                            <RadioInput type="radio" name={radio1} value={radio1} checked="checked" />
                            <Label for={radio1}>{radio1}</Label>
                        </RadioLabelWrap>
                        <RadioLabelWrap>
                            <RadioInput type="radio" name={radio2} value={radio2} />
                            <Label for={radio2}>{radio2}</Label>
                        </RadioLabelWrap>
                    </RadioWrap>
                </InputBigWrap>
                :
                <InputWrap>
                    <InputName>{ name }</InputName>
                    <Input placeholder={ holder }></Input>
                </InputWrap>
        }
        </>
    )
}

export default Input_Wrap;