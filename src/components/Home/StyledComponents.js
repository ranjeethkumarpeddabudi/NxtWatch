import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  display: flex;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 20vh;
  width: 100%;
  display: flex;
  background-size: cover;
  padding: 20px;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    height: 27vh;
  }
`
export const ResultContainer = styled.div`
  width: 85vw;
  overflow-y: scroll;
  @media screen and (max-width: 576px) {
    width: 100vw;
  }
`

export const BannerLogo = styled.img`
  height: 30px;
`

export const BannerText = styled.p``

export const GetButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
export const InfoContainer = styled.div``

export const CloseButton = styled.button`
  align-self: flex-start;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`
export const SearchInput = styled.input`
  outline: none;
`

export const VideosContainer = styled.div`
  overflow-y: scroll;
  min-height: 75vh;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
`
export const SearchContainer = styled.div`
  display: flex;
`
export const SearchButton = styled.button`
  display: flex;
  border: 1px solid #64748b;
  align-items: center;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 65vh;
  width: 100%;
`

export const MainHomeContainer = styled.div`
  background-color: ${props => (props.value ? '#181818' : '#f9f9f9')};
`

export const NoVideosContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  color: ${props => (props.value ? '#ffffff' : '#000000')};
`

export const NoVideoImage = styled.img`
  height: 350px;
  width: 350px;
  @media screen and (max-width: 576px) {
    height: 200px;
    width: 200px;
  }
`

export const NoVideoText = styled.h1`
  margin-bottom: 10px;
`

export const NoVideoInfo = styled.p`
  margin-bottom: 5px;
  margin-top: 5px;
`
export const RetryButton = styled.button`
  margin-top: 5px;
  background-color: #4f46e5;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  width: 70px;
  height: 35px;
  border-radius: 5px;
`

export const VideosListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  justify-content: flex-start;
  min-height: 60vh;
  overflow-y: scroll;
`

export const VideoDetailsContainer = styled.li`
  margin-right: 52px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 200px;
`
export const VideoImage = styled.img`
  height: 100px;
  width: 200px;
`
export const VideoLogo = styled.img`
  height: 30px;
  width: 30px;
`

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const ChannelName = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
`

export const VideoTitle = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
`

export const VideoInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  font-family: 'roboto';
  color: ${props => (props.value ? '#ffffff' : '#000000')};
  font-size: 15px;
`
export const VideoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px;
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ViewsTitle = styled.p`
  margin-top: 5px;
  margin-right: 5px;
  font-size: 12px;
`

export const DatePublished = styled.p`
  margin-top: 5px;
  font-size: 12px;
`
