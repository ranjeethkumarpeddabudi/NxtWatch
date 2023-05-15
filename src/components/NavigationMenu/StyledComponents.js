import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const MenuContainer = styled.div`
  height: 95vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};

  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const HeaderContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const MenuOption = styled.li`
  height: 35px;
  margin-bottom: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: 'roboto';
  padding-left: 20px;
  text-decoration: none;
  color: ${props => (props.value ? '#f1f5f9' : '#000000')};
  font-weight: ${props => (props.bgColor ? 'bold' : 'normal')};
`
export const OptionName = styled.p`
  font-size: 15px;
  padding-left: 10px;
  text-decoration: none;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const FooterContainer = styled.div`
  padding-left: 10px;
  color: ${props => (props.value ? '#ffffff' : '#000000')};
`

export const ContactUs = styled.p`
  font-weight: bold;
`
export const LogoContainer = styled.div``

export const Logo = styled.img`
  height: 40px;
  margin-right: 5px;
`
export const FooterInfo = styled.p``
