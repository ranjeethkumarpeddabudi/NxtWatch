import {
  FailureContainer,
  FailureImage,
  FailureInfo,
  FailureText,
  RetryButton,
} from './StyledComponents'
import Context from '../../Context'

const FailureView = props => {
  const {retry} = props

  const retryClicked = () => {
    retry()
  }
  return (
    <Context.Consumer>
      {value => {
        const {isDark} = value
        const failImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer value={isDark}>
            <FailureImage src={failImage} alt="failure view" />
            <FailureText>Oops! Something Went Wrong</FailureText>
            <FailureInfo>
              We are having some trouble to complete your request. Please try
              again.
            </FailureInfo>
            <RetryButton onClick={retryClicked}>Retry</RetryButton>
          </FailureContainer>
        )
      }}
    </Context.Consumer>
  )
}
export default FailureView
