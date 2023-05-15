import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import Context from '../../Context'
import {
  MenuContainer,
  MenuOption,
  HeaderContainer,
  OptionName,
  StyledLink,
  FooterContainer,
  ContactUs,
  LogoContainer,
  Logo,
  FooterInfo,
} from './StyledComponents'

const menuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED',
}

const NavigationMenu = () => (
  <Context.Consumer>
    {value => {
      const {activeMenu, changeMenu, isDark} = value

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
        <MenuContainer value={isDark}>
          <HeaderContainer>
            <StyledLink to="/">
              <MenuOption
                bgColor={menuConstants.home === activeMenu}
                onClick={onSelectionHome}
                value={isDark}
              >
                <AiFillHome
                  size={20}
                  color={menuConstants.home === activeMenu ? '#ff0b37' : null}
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
                    menuConstants.trending === activeMenu ? '#ff0b37' : null
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
                  color={menuConstants.gaming === activeMenu ? '#ff0b37' : null}
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
                    menuConstants.savedVideos === activeMenu ? '#ff0b37' : null
                  }
                />
                <OptionName>Saved videos</OptionName>
              </MenuOption>
            </StyledLink>
          </HeaderContainer>
          <FooterContainer value={isDark}>
            <ContactUs>CONTACT US</ContactUs>
            <LogoContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogoContainer>
            <FooterInfo>
              Enjoy! Now to see your channels and recommendations!
            </FooterInfo>
          </FooterContainer>
        </MenuContainer>
      )
    }}
  </Context.Consumer>
)

export default NavigationMenu
