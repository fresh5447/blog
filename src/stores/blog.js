
import {ADD_BLOG_POST, EDIT_BLOG_POST, DELETE_BLOG_POST} from '../constants/ActionTypes'

const initialState = []

export default (state=initialState, action) => {
  const {id, title, body} = action
  switch(action.type){

    case ADD_BLOG_POST:
      console.log('Post is added to the store')
      return [...state, {id, title, body}]

    case EDIT_BLOG_POST:
      return state.map(post =>
        post.id === id ?
          Object.assign({}, post, {title, body}) :
          post
        )

    case DELETE_BLOG_POST:
      return state.filter( post => post.id !== id)

    default:
      return state
  }
}

