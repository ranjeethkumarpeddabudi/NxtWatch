import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import NavigationMenu from '../NavigationMenu'
import FailureView from '../FailureView'

import {
  HomeContainer,
  BannerContainer,
  ResultContainer,
  BannerLogo,
  BannerText,
  GetButton,
  InfoContainer,
  CloseButton,
  SearchInput,
  VideosContainer,
  SearchContainer,
  SearchButton,
  LoaderContainer,
  NoVideoImage,
  NoVideoInfo,
  NoVideoText,
  RetryButton,
  VideoInfoContainer,
  VideoTitle,
  ChannelName,
  NoVideosContainer,
  VideosListContainer,
  VideoDetailsContainer,
  VideoImage,
  VideoLogo,
  VideoTitleContainer,
  MainHomeContainer,
  VideoLink,
  ViewsContainer,
  ViewsTitle,
  DatePublished,
} from './StyledComponents'
import Context from '../../Context'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showBanner: true,
    apiStatus: apiConstants.initial,
    searchText: '',
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchText} = this.state
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchText}`
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

  onSearchInput = event => {
    this.setState({searchText: event.target.value})
  }

  onCloseButton = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              {videosList.length === 0 ? (
                <NoVideosContainer value={isDark}>
                  <NoVideoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <NoVideoText>No Search results found</NoVideoText>
                  <NoVideoInfo>
                    Try different key words or remove search filter
                  </NoVideoInfo>
                  <RetryButton onClick={this.onRetryButton}>Retry</RetryButton>
                </NoVideosContainer>
              ) : (
                <VideosListContainer>
                  {videosList.map(each => {
                    const {
                      thumbnailUrl,
                      id,
                      channelName,
                      profileImageUrl,
                      publishedDate,
                      title,
                      viewsCount,
                    } = each
                    const formattedDate = formatDistanceToNow(
                      new Date(publishedDate),
                      {addSuffix: true},
                    )
                      .split(' ')
                      .slice(1, 4)
                      .join(' ')

                    return (
                      <VideoDetailsContainer key={each.id}>
                        <VideoLink to={`/videos/${id}`}>
                          <VideoImage
                            src={thumbnailUrl}
                            alt="video thumbnail"
                          />

                          <VideoInfoContainer value={isDark}>
                            <VideoLogo
                              src={profileImageUrl}
                              alt="channel logo"
                            />
                            <VideoTitleContainer>
                              <VideoTitle>{title}</VideoTitle>
                              <ChannelName>{channelName}</ChannelName>
                              <ViewsContainer>
                                <ViewsTitle>{viewsCount} views</ViewsTitle>
                                <DatePublished>{formattedDate}</DatePublished>
                              </ViewsContainer>
                            </VideoTitleContainer>
                          </VideoInfoContainer>
                        </VideoLink>
                      </VideoDetailsContainer>
                    )
                  })}
                </VideosListContainer>
              )}
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
    const {showBanner, searchText} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value

          return (
            <MainHomeContainer data-testid="home" value={isDark}>
              <Header />
              <HomeContainer>
                <NavigationMenu />
                <ResultContainer>
                  {showBanner && (
                    <BannerContainer data-testid="banner" value={isDark}>
                      <InfoContainer>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <GetButton value={isDark}>GET IT NOW</GetButton>
                      </InfoContainer>
                      <CloseButton
                        type="button"
                        onClick={this.onCloseButton}
                        data-testid="close"
                      >
                        <AiOutlineClose />
                      </CloseButton>
                    </BannerContainer>
                  )}
                  <VideosContainer>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        value={searchText}
                        onChange={this.onSearchInput}
                        placeholder="Search"
                      />
                      <SearchButton
                        onClick={this.getVideos}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch />
                      </SearchButton>
                    </SearchContainer>
                    {this.onGetStatusView()}
                  </VideosContainer>
                </ResultContainer>
              </HomeContainer>
            </MainHomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
