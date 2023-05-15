import {formatDistanceToNow} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import NavigationMenu from '../NavigationMenu'
import ReactContext from '../../Context'
import {
  HomeContainer,
  TrendingChannelName,
  LogoContainer,
  TrendingDate,
  TrendingHeading,
  TrendingInfoContainer,
  TrendingLogoContainer,
  SavedContainer,
  TrendingImage,
  VideoLink,
  TrendingTitle,
  TrendingVideoContainer,
  TrendingVideosContainer,
  TrendingViewContainer,
  TrendingViews,
  NoVideosContainer,
  EmptyInfo,
  EmptyTitle,
  EmptyViewImage,
  MainSavedContainer,
} from './StyledComponents'

const SavedVideos = () => (
  <MainSavedContainer data-testid="savedVideos">
    <Header />
    <HomeContainer>
      <NavigationMenu />
      <ReactContext.Consumer>
        {value => {
          const {savedList, isDark} = value
          if (savedList.length === 0) {
            return (
              <NoVideosContainer value={isDark}>
                <EmptyViewImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <EmptyTitle>No saved videos found</EmptyTitle>
                <EmptyInfo>
                  You can save your videos while watching them
                </EmptyInfo>
              </NoVideosContainer>
            )
          }
          return (
            <SavedContainer value={isDark}>
              <TrendingLogoContainer data-testid="banner">
                <LogoContainer>
                  <HiFire color="#ff0000" size={50} />
                </LogoContainer>
                <TrendingHeading value={isDark}>Saved Videos</TrendingHeading>
              </TrendingLogoContainer>
              <TrendingVideosContainer>
                {savedList.map(each => {
                  const {
                    thumbnailUrl,
                    id,
                    channelName,
                    publishedDate,
                    title,
                    viewCount,
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
                            <TrendingViews>{viewCount}</TrendingViews>
                            <TrendingDate>{formattedDate}</TrendingDate>
                          </TrendingViewContainer>
                        </TrendingInfoContainer>
                      </VideoLink>
                    </TrendingVideoContainer>
                  )
                })}
              </TrendingVideosContainer>
            </SavedContainer>
          )
        }}
      </ReactContext.Consumer>
    </HomeContainer>
  </MainSavedContainer>
)

export default SavedVideos
