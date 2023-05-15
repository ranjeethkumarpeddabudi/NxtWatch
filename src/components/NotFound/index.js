import Header from '../Header'
import NavigationMenu from '../NavigationMenu'
import Context from '../../Context'
import {
  HomeContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundInfo,
  NotFoundTitle,
} from './StyledComponents'

const NotFound = () => (
  <Context.Consumer>
    {value => {
      const {isDark} = value
      const notFound = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <HomeContainer>
            <NavigationMenu />
            <NotFoundContainer value={isDark}>
              <NotFoundImage src={notFound} alt="not found" />
              <NotFoundTitle>Page Not Found</NotFoundTitle>
              <NotFoundInfo>
                We are sorry, the page you requested could not be found.
              </NotFoundInfo>
            </NotFoundContainer>
          </HomeContainer>
        </>
      )
    }}
  </Context.Consumer>
)

export default NotFound
