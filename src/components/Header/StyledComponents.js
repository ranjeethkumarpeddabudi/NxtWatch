import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavContainer = styled.nav`
  height: 5vh;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
`
export const LogoImage = styled.img`
  height: 25px;
`
export const ListOptions = styled.ul`
  list-style-type: none;
  display: flex;
  width: 120px;
  justify-content: space-between;
  padding: 0px;
`
export const ListItem = styled.li``

export const ThemeButton = styled.button`
  padding: 0px;
  height: 25px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.value ? '#ffffff' : '#000000')};
`
export const Profile = styled.button`
  padding: 0px;
  height: 25px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  height: 20px;
`
export const LogoutButton = styled.button`
  background-color: ${props => (props.value ? 'transparent' : '#ffffff')};
  color: ${props => (props.value ? '#ffffff' : '#3b82f6')};
  border: 2px solid #3b82f6;
  border-radius: 3px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const LogoutMobileButton = styled.button`
  background-color: ${props => (props.value ? 'transparent' : '#ffffff')};
  color: ${props => (props.value ? '#ffffff' : '#000000')};
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 577px) {
    display: none;
  }
`

export const CancelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => (props.value ? '#000000' : '#ffffff')};
`
export const TextElement = styled.p``
export const ButtonContainer = styled.div``
export const Button = styled.button`
  cursor: pointer;
  margin-left: 10px;
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
