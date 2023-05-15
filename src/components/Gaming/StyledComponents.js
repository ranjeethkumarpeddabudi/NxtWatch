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
export const MainGamingContainer = styled.div`
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
`

export const VideosContainer = styled.div`
  overflow-y: scroll;
  height: 95vh;
  display: flex;
  width: 100%;
  flex-grow: 1;
  padding: 0px;
  flex-direction: column;
  align-items: flex-start;
`
export const GamingLogoContainer = styled.div`
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
export const GamingHeading = styled.h1`
  margin-left: 20px;
  color: ${props => (props.value ? '#ffffff' : '#000000')};
`

export const GamingVideosContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const GamingVideoContainer = styled.li`
  margin: 30px;
`

export const GamingImage = styled.img`
  height: 200px;
  width: 200px;
`

export const GamingTitle = styled.p``

export const GamingViews = styled.p``

export const VideoLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.value ? '#ffffff' : '#000000')};
`
