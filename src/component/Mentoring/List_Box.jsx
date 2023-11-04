import React from 'react';
import styled from 'styled-components';

const ListBoxWrap = styled.div`
  width: 100%;
  background-color: #F1F7FA;
  height: 60px;
  border: none;
  border-radius: 8px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TitleWrap = styled.div`
  display: flex;
  padding-left: 15px;
  align-items: center;
`

const IngButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 34px;
  background-color: #0AAAEF;
  border-radius: 8px;
  color: white;
  margin-right: 7px;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
`

const DetailWrap = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 17px;
`

const Date = styled.div`
  width: 120px;
  text-align: center;
`

const Result = styled.div`
  width: 120px;
  text-align: center;
`

const Detail = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  width: 81px;
  height: 26px;
  background-color: white;
  color: #737978;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
`


const List_Box = ({ ing, name, date, result, detail }) =>{
    return(
        <>
            {
                ing == 'true' ?
                    <ListBoxWrap>
                        <TitleWrap>
                            <IngButton>진행중</IngButton>
                            <Title>{ name }</Title>
                        </TitleWrap>
                        <DetailWrap>
                            <Date>{ date }</Date>
                            <Result>{ result }</Result>
                            <Detail>
                                <Button>{ detail }</Button>
                            </Detail>
                        </DetailWrap>
                    </ListBoxWrap>
                :
                    <ListBoxWrap>
                        <TitleWrap>
                            <Title>{ name }</Title>
                        </TitleWrap>
                        <DetailWrap>
                            <Date>{ date }</Date>
                            <Result>{ result }</Result>
                            <Detail>
                                <Button>{ detail }</Button>
                            </Detail>
                        </DetailWrap>
                    </ListBoxWrap>
            }
        </>
    )
}

export default List_Box;