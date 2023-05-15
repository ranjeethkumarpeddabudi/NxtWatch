import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  display: flex;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 65vh;
  width: 100%;
`
export const MainSavedContainer = styled.div`
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

export const TrendingLogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 10px;
`
export const LogoContainer = styled.div`
  border-radius: 50px;
  background-color: #d7dfe9;
`
export const TrendingHeading = styled.h1`
  color: ${props => (props.value ? '#ffffff' : '#000000')};
  margin-left: 20px;
`

export const TrendingVideosContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0px;
`

export const TrendingVideoContainer = styled.li`
  margin: 20px;
  display: flex;
`

export const TrendingImage = styled.img`
  height: 200px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const TrendingInfoContainer = styled.div`
  padding: 30px;
  color: ${props => (props.value ? '#ffffff' : '#000000')};
`

export const TrendingTitle = styled.p`
  font-size: 25px;
`

export const TrendingChannelName = styled.p``

export const TrendingViewContainer = styled.div`
  display: flex;
`
export const TrendingDate = styled.p``

export const TrendingViews = styled.p`
  margin-right: 20px;
`

export const VideoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`
export const SavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.value ? '#ffffff' : '#000000')};
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.value ? '#ffffff' : '#000000')};
`

export const EmptyViewImage = styled.img`
  height: 250px;
`

export const EmptyTitle = styled.h1`
  margin-bottom: 0px;
`

export const EmptyInfo = styled.p``
