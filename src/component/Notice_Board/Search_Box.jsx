import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: #ffffff;
  background-image: url('../../img/inputIcon.svg');
  background-repeat: no-repeat;
  background-position: 5px center;
  padding-left: 10px;
  border: none;
  width: 120px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 4px;
`

const Search_Box = () => {
    return(
        <Input type='text' placeholder='검색'></Input>
    )
}

export default Search_Box;