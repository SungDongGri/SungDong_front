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
  color: #737978;
  font-weight: 500;
`

const Input = styled.input`
  width: 35vw;
  height: 40px;
  padding: 0 10px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #F1F7FA;
  border: none;
  margin-bottom: 5px;

  ::placeholder {
    color: green;
  }
`

const RadioWrap = styled.div`
  display: flex; 
`

const RadioLabelWrap = styled.div``

const RadioInput = styled.input`
  margin: 50px 5px 0 30px;
`

const Label = styled.label``

const ButtonWrap = styled.div`
  display: flex;
`

const Button = styled.button`
  margin: 35px 5px 0 30px;
  padding: 0 12px;
  background-color: #C6EEFF;
  border: none;
  border-radius: 8px;
  color: #737978;
  height: 35px;
`

const Input_Wrap = ({ name, holder, radio1, radio2, button }) => {
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
                </InputBigWrap> :
                button ?
                <InputBigWrap>
                    <InputTwoWrap>
                        <InputName>{ name }</InputName>
                        <Input placeholder={ holder }></Input>
                    </InputTwoWrap>
                    <ButtonWrap>
                        <Button>{ button }</Button>
                    </ButtonWrap>
                </InputBigWrap> :
                <InputWrap>
                    <InputName>{ name }</InputName>
                    <Input placeholder={ holder }></Input>
                </InputWrap>
        }
        </>
    )
}

export default Input_Wrap;