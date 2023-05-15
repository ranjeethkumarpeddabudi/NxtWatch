import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigationMenu from '../NavigationMenu'
import FailureView from '../FailureView'

import {
  LoaderContainer,
  HomeContainer,
  VideosContainer,
  TrendingLogoContainer,
  LogoContainer,
  TrendingHeading,
  TrendingVideosContainer,
  TrendingVideoContainer,
  TrendingImage,
  VideoLink,
  TrendingInfoContainer,
  TrendingChannelName,
  TrendingTitle,
  TrendingViewContainer,
  TrendingViews,
  TrendingDate,
  MainTrendingContainer,
} from './StyledComponents'
import Context from '../../Context'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
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
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
        channelName: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        publishedDate: each.published_at,
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
              <TrendingLogoContainer data-testid="banner">
                <LogoContainer>
                  <HiFire color="#ff0000" size={50} />
                </LogoContainer>
                <TrendingHeading>Trending</TrendingHeading>
              </TrendingLogoContainer>
              <TrendingVideosContainer>
                {videosList.map(each => {
                  const {
                    thumbnailUrl,
                    id,
                    channelName,
                    publishedDate,
                    title,
                    viewsCount,
                  } = each
                  const formattedDate = formatDistanceToNow(
                    new Date(publishedDate),
                    {
                      addSuffix: true,
                    },
                  )
                    .split(' ')
                    .slice(1, 4)
                    .join(' ')

                  return (
                    <TrendingVideoContainer key={id}>
                      <VideoLink to={`/videos/${id}`}>
                        <TrendingImage
                          src={thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <TrendingInfoContainer value={isDark}>
                          <TrendingTitle>{title}</TrendingTitle>
                          <TrendingChannelName>
                            {channelName}
                          </TrendingChannelName>
                          <TrendingViewContainer>
                            <TrendingViews>{viewsCount}</TrendingViews>
                            <TrendingDate>{formattedDate}</TrendingDate>
                          </TrendingViewContainer>
                        </TrendingInfoContainer>
                      </VideoLink>
                    </TrendingVideoContainer>
                  )
                })}
              </TrendingVideosContainer>
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
            <MainTrendingContainer data-testid="trending" value={isDark}>
              <Header />
              <HomeContainer>
                <NavigationMenu />
                <VideosContainer value={isDark}>
                  {this.onGetStatusView()}
                </VideosContainer>
              </HomeContainer>
            </MainTrendingContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Trending
