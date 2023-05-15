import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import 'reactjs-popup/dist/index.css'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  NavContainer,
  LogoImage,
  HeaderContainer,
  StyledLink,
  MenuOption,
  OptionName,
  ListOptions,
  ListItem,
  ThemeButton,
  Profile,
  ProfileImage,
  LogoutButton,
  LogoutMobileButton,
  CancelContainer,
  TextElement,
  ButtonContainer,
  Button,
} from './StyledComponents'

import ReactContext from '../../Context'

const menuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED',
}

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ReactContext.Consumer>
      {value => {
        const {isDark, changeMode, activeMenu, changeMenu} = value

        const changeTheme = () => {
          changeMode()
        }
        const logoImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const onSelectionHome = () => {
          changeMenu('HOME')
        }
        const onSelectionTrending = () => {
          changeMenu('TRENDING')
        }
        const onSelectionGaming = () => {
          changeMenu('GAMING')
        }
        const onSelectionSaved = () => {
          changeMenu('SAVED')
        }

        return (
          <NavContainer value={isDark}>
            <Link to="/">
              <LogoImage src={logoImage} alt="website logo" />
            </Link>
            <ListOptions>
              <ListItem>
                <ThemeButton
                  onClick={changeTheme}
                  data-testid="theme"
                  value={isDark}
                >
                  {isDark ? <FiSun size={20} /> : <FaMoon size={20} />}
                </ThemeButton>
              </ListItem>
              <ListItem>
                <Profile>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </Profile>
                <Popup
                  modal
                  trigger={
                    <LogoutMobileButton value={isDark}>
                      <GiHamburgerMenu size={20} />
                    </LogoutMobileButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <CancelContainer value={isDark}>
                      <Button type="button" onClick={() => close()}>
                        <IoMdClose size={20} />
                      </Button>

                      <HeaderContainer>
                        <StyledLink to="/">
                          <MenuOption
                            bgColor={menuConstants.home === activeMenu}
                            onClick={onSelectionHome}
                            value={isDark}
                          >
                            <AiFillHome
                              size={20}
                              color={
                                menuConstants.home === activeMenu
                                  ? '#ff0b37'
                                  : null
                              }
                            />
                            <OptionName>Home</OptionName>
                          </MenuOption>
                        </StyledLink>
                        <StyledLink to="/trending">
                          <MenuOption
                            bgColor={menuConstants.trending === activeMenu}
                            onClick={onSelectionTrending}
                            value={isDark}
                          >
                            <HiFire
                              size={20}
                              color={
                                menuConstants.trending === activeMenu
                                  ? '#ff0b37'
                                  : null
                              }
                            />
                            <OptionName>Trending</OptionName>
                          </MenuOption>
                        </StyledLink>
                        <StyledLink to="/gaming">
                          <MenuOption
                            bgColor={menuConstants.gaming === activeMenu}
                            onClick={onSelectionGaming}
                            value={isDark}
                          >
                            <SiYoutubegaming
                              size={20}
                              color={
                                menuConstants.gaming === activeMenu
                                  ? '#ff0b37'
                                  : null
                              }
                            />
                            <OptionName>Gaming</OptionName>
                          </MenuOption>
                        </StyledLink>
                        <StyledLink to="/saved-videos">
                          <MenuOption
                            bgColor={menuConstants.savedVideos === activeMenu}
                            onClick={onSelectionSaved}
                            value={isDark}
                          >
                            <MdPlaylistAdd
                              size={20}
                              color={
                                menuConstants.savedVideos === activeMenu
                                  ? '#ff0b37'
                                  : null
                              }
                            />
                            <OptionName>Saved videos</OptionName>
                          </MenuOption>
                        </StyledLink>
                      </HeaderContainer>
                    </CancelContainer>
                  )}
                </Popup>
              </ListItem>
              <ListItem>
                <Popup
                  modal
                  trigger={<LogoutButton value={isDark}>Logout</LogoutButton>}
                  className="popup-content"
                >
                  {close => (
                    <CancelContainer value={isDark}>
                      <TextElement>
                        Are you sure, you want to logout
                      </TextElement>
                      <ButtonContainer>
                        <Button type="button" onClick={() => close()}>
                          Cancel
                        </Button>
                        <Button onClick={onLogout}>Confirm</Button>
                      </ButtonContainer>
                    </CancelContainer>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <LogoutMobileButton value={isDark}>
                      <FiLogOut size={20} />
                    </LogoutMobileButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <CancelContainer value={isDark}>
                      <TextElement>
                        Are you sure, you want to logout
                      </TextElement>
                      <ButtonContainer>
                        <Button type="button" onClick={() => close()}>
                          Cancel
                        </Button>
                        <Button onClick={onLogout}>Confirm</Button>
                      </ButtonContainer>
                    </CancelContainer>
                  )}
                </Popup>
              </ListItem>
            </ListOptions>
          </NavContainer>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default withRouter(Header)
