import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.value ? '#313131' : '#f9f9f9')};
`

export const LoginSection = styled.form`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  width: 25vw;
  font-family: 'roboto';
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.value ? '#f9f9f9' : '#0f0f0f')};

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`
export const Logo = styled.img`
  height: 40px;
  align-self: center;
  margin-bottom: 30px;
  margin-top: 30px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
`
export const CheckBoxElement = styled.input`
  margin-bottom: 8px;
`
export const LabelElement = styled.label`
  margin-bottom: 5px;
  font-size: 15px;
`

export const InputElement = styled.input`
  margin-bottom: 20px;
  height: 30px;
  border-width: 2px;
  border-style: solid;
  outline: none;
  padding: 5px;
  border-radius: 5px;
  border-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
  background-color: ${props => (props.mode ? 'transparent' : '#f9f9f9')};
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  font-size: 15px;
  height: 35px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 30px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
`
