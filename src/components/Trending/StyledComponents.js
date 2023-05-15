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
  min-height: 100%;
  width: 100%;
`

export const MainTrendingContainer = styled.div`
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
`

export const VideosContainer = styled.div`
  overflow-y: scroll;
  height: 95vh;
  display: flex;
  width: 100%;
  flex-grow: 1;
  padding: 0px;
  color: ${props => (props.value ? '#ffffff' : '#000000')};
  flex-direction: column;
  align-items: flex-start;
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
    width: 180px;
  }
`

export const TrendingInfoContainer = styled.div`
  padding: 30px;
  color: ${props => (props.value ? '#ffffff' : '#000000')};
`

export const TrendingTitle = styled.p`
  font-size: 25px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
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
`
