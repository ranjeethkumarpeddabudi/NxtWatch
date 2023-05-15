import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
`

export const HomedContainer = styled.div`
  display: flex;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: ${props => (props.value ? '#000000' : '#ffffff')};
  color: ${props => (props.value ? '#ffffff' : '#000000')};
`

export const NotFoundImage = styled.img`
  height: 250px;
`

export const NotFoundTitle = styled.h1`
  margin-bottom: 0px;
`

export const NotFoundInfo = styled.p``
