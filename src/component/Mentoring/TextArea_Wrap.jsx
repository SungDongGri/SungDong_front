import React from 'react';
import styled from 'styled-components';

const TextAreaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 5px 0 10px 0;
`

const TextAreaH3 = styled.p`
  margin: 0 0 8px 0;
`

const TextArea = styled.textarea`
  width: 35vw;
  height: 150px;
  padding: 10px;
  background-color: #F1F7FA;
  border: none;
  border-radius: 8px;
  resize: none;
  box-sizing: border-box;
  margin-bottom: 5px;
`

const TextArea_Wrap = ({name, holder}) => {
    return(
        <TextAreaWrap>
            <TextAreaH3>{ name }</TextAreaH3>
            <TextArea placeholder={holder}></TextArea>
        </TextAreaWrap>
    )
}

export default TextArea_Wrap;