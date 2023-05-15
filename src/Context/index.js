import React from 'react'

const ReactContext = React.createContext({
  activeMenu: '',
  likedList: [],
  dislikedList: [],
  savedList: [],
  changeMenu: () => {},
  changeLikeStatus: () => {},
  changeDisLikeStatus: () => {},
  changeSaveStatus: () => {},
  isDark: false,
  changeMode: () => {},
})

export default ReactContext
