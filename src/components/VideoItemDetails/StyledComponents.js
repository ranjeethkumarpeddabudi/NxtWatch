import styled from 'styled-components'

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

export const VideosContainer = styled.div`
  overflow-y: scroll;
  height: 95vh;
  display: flex;
  width: 100%;
  flex-grow: 1;
  padding: 0px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.value ? '#ffffff' : '#000000')};
`
export const DetailsContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
`
export const Title = styled.p`
  margin-bottom: 0px;
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    height: 100px;
  }
`

export const LeftContainer = styled.div`
  display: flex;
`

export const Views = styled.p``

export const PublishedDate = styled.p`
  margin-left: 10px;
`

export const RightContainer = styled.ul`
  list-style-type: none;
  display: flex;
`

export const IconContainer = styled.li`
  display: flex;
  margin-right: 40px;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.customColor ? '#2563eb' : '#64748b')};
`

export const IconText = styled.p`
  margin-left: 10px;
`
export const SaveButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.customColor ? '#2563eb' : '#64748b')};
  margin-right: 5px;
  border: none;
`

export const Line = styled.hr`
  margin-top: 0px;
`

export const AboutSectionContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelProfileImage = styled.img`
  height: 30px;
`

export const AboutSection = styled.div`
  padding: 0px;
`

export const ChannelName = styled.p`
  margin-top: 0px;
`

export const SubscriberCount = styled.p`
  margin-bottom: 30px;
`

export const Description = styled.p``
