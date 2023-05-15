import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigationMenu from '../NavigationMenu'
import FailureView from '../FailureView'

import {
  LoaderContainer,
  HomeContainer,
  VideosContainer,
  GamingLogoContainer,
  LogoContainer,
  GamingHeading,
  GamingVideosContainer,
  GamingImage,
  GamingTitle,
  GamingVideoContainer,
  VideoLink,
  GamingViews,
  MainGamingContainer,
} from './StyledComponents'
import Context from '../../Context'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const formattedData = fetchedData.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewsCount: each.view_count,
      }))

      this.setState({
        videosList: formattedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onRetryButton = () => {
    this.getVideos()
  }

  renderSuccessView = () => {
    const {videosList} = this.state

    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <GamingLogoContainer data-testid="banner">
                <LogoContainer>
                  <SiYoutubegaming color="#ff0000" size={50} />
                </LogoContainer>
                <GamingHeading value={isDark}>Gaming</GamingHeading>
              </GamingLogoContainer>
              <GamingVideosContainer>
                {videosList.map(each => {
                  const {thumbnailUrl, id, title, viewsCount} = each
                  return (
                    <GamingVideoContainer key={id}>
                      <VideoLink to={`/videos/${id}`} value={isDark}>
                        <GamingImage src={thumbnailUrl} alt="video thumbnail" />
                        <GamingTitle>{title}</GamingTitle>
                        <GamingViews>
                          {viewsCount} Watching Worldwide
                        </GamingViews>
                      </VideoLink>
                    </GamingVideoContainer>
                  )
                })}
              </GamingVideosContainer>
            </>
          )
        }}
      </Context.Consumer>
    )
  }

  renderFailureView = () => <FailureView retry={this.onRetryButton} />

  renderProgressView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  onGetStatusView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderProgressView()
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <MainGamingContainer data-testid="gaming" value={isDark}>
              <Header />
              <HomeContainer>
                <NavigationMenu />
                <VideosContainer>{this.onGetStatusView()}</VideosContainer>
              </HomeContainer>
            </MainGamingContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Gaming
