import React from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #F1F7FA;
  border: none;
  margin-bottom: 5px;
`
const InputWrap = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled.button`
  width: 100px;
  background-color: #C6EEFF;
  border: none;
  border-radius: 8px;
  color: #737978;
  height: 35px;
  margin-left: 10px;
  cursor: pointer;
`

const Input = ({type, holder, button}) => {
    return(
        <>
            { button ?
                <InputWrap>
                    <InputBox type={ type } placeholder={ holder }></InputBox>
                    <Button type='button'>{ button }</Button>
                </InputWrap>
                :
                <InputBox type={ type } placeholder={ holder }></InputBox>
            }
        </>
    )
}

export default Input;