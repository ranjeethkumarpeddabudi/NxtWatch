import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import './App.css'
import Context from './Context'

class App extends Component {
  state = {
    activeMenu: 'HOME',
    likedList: [],
    dislikedList: [],
    savedList: [],
    isDark: false,
  }

  onClickLike = () => {
    this.setState(prevState => ({likeStatus: !prevState.likeStatus}))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({dislikeStatus: !prevState.dislikeStatus}))
  }

  onClickSave = videosList => {
    this.setState(prevState => ({saveStatus: !prevState.saveStatus}))
    const {savedVideosList} = this.state
    const filtered = savedVideosList.filter(each => each.id === videosList.id)
    if (filtered.length >= 1) {
      const filteredUnique = savedVideosList.filter(
        each => each.id !== videosList.id,
      )
      this.setState({savedVideosList: filteredUnique})
    } else {
      this.setState({savedVideosList: [...savedVideosList, videosList]})
    }
  }

  onChangeMenu = value => {
    this.setState({activeMenu: value})
  }

  addAsLikedVideos = id => {
    const {likedList, dislikedList} = this.state
    if (dislikedList.includes(id)) {
      this.setState({dislikedList: dislikedList.filter(each => each !== id)})
    }
    if (likedList.includes(id)) {
      this.setState({likedList: likedList.filter(each => each !== id)})
    } else {
      this.setState({likedList: [...likedList, id]})
    }
  }

  addAsDislikedVideos = id => {
    const {likedList, dislikedList} = this.state
    if (likedList.includes(id)) {
      this.setState({likedList: likedList.filter(each => each !== id)})
    }
    if (dislikedList.includes(id)) {
      this.setState({dislikedList: dislikedList.filter(each => each !== id)})
    } else {
      this.setState({dislikedList: [...dislikedList, id]})
    }
  }

  addOrRemoveFromSavedVideos = videoDetails => {
    const {savedList} = this.state
    let savedListIds = []
    if (savedList.length !== 0) {
      savedListIds = savedList.map(each => each.id)
    }
    if (savedListIds.includes(videoDetails.id)) {
      this.setState({
        savedList: savedList.filter(each => each.id !== videoDetails.id),
      })
    } else {
      this.setState({savedList: [...savedList, videoDetails]})
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {activeMenu, likedList, dislikedList, savedList, isDark} = this.state
    return (
      <Context.Provider
        value={{
          activeMenu,
          likedList,
          dislikedList,
          savedList,
          isDark,
          changeMenu: this.onChangeMenu,
          changeLikeStatus: this.addAsLikedVideos,
          changeDisLikeStatus: this.addAsDislikedVideos,
          changeSaveStatus: this.addOrRemoveFromSavedVideos,
          changeMode: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
