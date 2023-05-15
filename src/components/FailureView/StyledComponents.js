import styled from 'styled-components'

export const FailureContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  color: ${props => (props.value ? '#ffffff' : '#000000')};
  background-color: ${props => (props.value ? '#000000' : '#ffffff')};
`

export const FailureImage = styled.img`
  height: 350px;
  width: 350px;
  @media screen and (max-width: 576px) {
    height: 200px;
    width: 200px;
  }
`

export const FailureText = styled.h1`
  margin-bottom: 10px;
`

export const FailureInfo = styled.p`
  margin-bottom: 5px;
  margin-top: 5px;
`

export const RetryButton = styled.button`
  margin-top: 5px;
  background-color: #4f46e5;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  width: 70px;
  height: 35px;
  border-radius: 5px;
`
