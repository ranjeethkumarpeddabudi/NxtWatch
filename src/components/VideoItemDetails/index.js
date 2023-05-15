import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigationMenu from '../NavigationMenu'
import FailureView from '../FailureView'
import ReactContext from '../../Context'

import {
  LoaderContainer,
  HomeContainer,
  SaveButton,
  VideosContainer,
  DetailsContainer,
  Title,
  OptionsContainer,
  LeftContainer,
  RightContainer,
  IconContainer,
  Line,
  Views,
  AboutSectionContainer,
  ChannelProfileImage,
  AboutSection,
  ChannelName,
  SubscriberCount,
  Description,
  PublishedDate,
} from './StyledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videosList: {},
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const formattedData = {
        id: fetchedData.video_details.id,
        channelName: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        publishedDate: fetchedData.video_details.published_at,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
        title: fetchedData.video_details.title,
        description: fetchedData.video_details.description,
        viewCount: fetchedData.video_details.view_count,
      }

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
    const {
      videoUrl,
      channelName,
      profileImageUrl,
      publishedDate,
      thumbnailUrl,
      subscriberCount,
      title,
      description,
      viewCount,
      id,
    } = videosList

    const formattedDate = formatDistanceToNow(new Date(publishedDate), {
      addSuffix: true,
    })
      .split(' ')
      .slice(1, 4)
      .join(' ')
    return (
      <>
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100vh"
          controls
          light={thumbnailUrl}
        />
        <DetailsContainer>
          <Title>{title}</Title>
          <OptionsContainer>
            <LeftContainer>
              <Views>{viewCount} views</Views>
              <PublishedDate>{formattedDate}</PublishedDate>
            </LeftContainer>
            <ReactContext.Consumer>
              {value => {
                const {
                  likedList,
                  dislikedList,
                  savedList,
                  changeDisLikeStatus,
                  changeLikeStatus,
                  changeSaveStatus,
                } = value

                const likeClick = () => {
                  changeLikeStatus(id)
                }
                const dislikeClick = () => {
                  changeDisLikeStatus(id)
                }
                const saveClick = () => {
                  changeSaveStatus(videosList)
                }
                const savedListIds = savedList.map(each => each.id)
                const saveText = savedListIds.includes(id) ? 'Saved' : 'Save'
                return (
                  <RightContainer>
                    <IconContainer
                      onClick={likeClick}
                      customColor={likedList.includes(id)}
                    >
                      <BiLike />
                      <SaveButton customColor={likedList.includes(id)}>
                        Like
                      </SaveButton>
                    </IconContainer>
                    <IconContainer
                      onClick={dislikeClick}
                      customColor={dislikedList.includes(id)}
                    >
                      <BiDislike />
                      <SaveButton customColor={dislikedList.includes(id)}>
                        Dislike
                      </SaveButton>
                    </IconContainer>
                    <IconContainer
                      onClick={saveClick}
                      customColor={savedListIds.includes(id)}
                    >
                      <MdPlaylistAdd />
                      <SaveButton customColor={savedListIds.includes(id)}>
                        {saveText}
                      </SaveButton>
                    </IconContainer>
                  </RightContainer>
                )
              }}
            </ReactContext.Consumer>
          </OptionsContainer>
          <Line />
          <AboutSectionContainer>
            <ChannelProfileImage src={profileImageUrl} alt="channel logo" />
            <AboutSection>
              <ChannelName>{channelName}</ChannelName>
              <SubscriberCount>{subscriberCount} subscribers</SubscriberCount>
              <Description>{description}</Description>
            </AboutSection>
          </AboutSectionContainer>
        </DetailsContainer>
      </>
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
      <>
        <Header />
        <HomeContainer>
          <NavigationMenu />
          <ReactContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <VideosContainer data-testid="videoItemDetails" value={isDark}>
                  {this.onGetStatusView()}
                </VideosContainer>
              )
            }}
          </ReactContext.Consumer>
        </HomeContainer>
      </>
    )
  }
}

export default VideoItemDetails
