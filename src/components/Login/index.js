import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  LoginSection,
  Logo,
  InputElement,
  LabelElement,
  CheckBoxContainer,
  CheckBoxElement,
  LoginButton,
  ErrorMsg,
} from './StyledComponents'
import Context from '../../Context'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onClickSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.setState({showMsg: true, errorMsg: data.error_msg})
    }
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onClickUsername = event => {
    this.setState({username: event.target.value})
  }

  onClickPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showMsg, errorMsg, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const inputType = showPassword ? 'text' : 'password'
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          const websiteLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer value={isDark}>
              <LoginSection onSubmit={this.onClickSubmit} value={isDark}>
                <Logo src={websiteLogo} alt="website logo" />
                <LabelElement htmlFor="username">USERNAME</LabelElement>
                <InputElement
                  id="username"
                  type="text"
                  value={username}
                  onChange={this.onClickUsername}
                  placeholder="Username"
                  mode={isDark}
                />
                <LabelElement htmlFor="password">PASSWORD</LabelElement>
                <InputElement
                  id="password"
                  type={inputType}
                  value={password}
                  onChange={this.onClickPassword}
                  placeholder="Password"
                  mode={isDark}
                />
                <CheckBoxContainer>
                  <CheckBoxElement
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onClickCheckBox}
                  />
                  <LabelElement htmlFor="checkbox">Show Password</LabelElement>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginSection>
            </LoginContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
