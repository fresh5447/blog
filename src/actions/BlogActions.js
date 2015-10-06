
import {LOAD_BLOG_POSTS, ADD_BLOG_POST, EDIT_BLOG_POST, DELETE_BLOG_POST} from '../constants/ActionTypes'
import axios from 'axios'

const URL = "http://localhost:3000/api/blogs/"


export const load = () =>
  dispatch => {
    axios.get(URL).then( response => {
      response.data.map( post => dispatch(postAdded(post._id, post.title, post.body)))
    })
  }

export const postAdded = (id, title, body) => ({
  type: ADD_BLOG_POST,
  id, title, body
})

export const addPost = (title, body) =>
   dispatch => {
    axios.post(URL, {title, body}).then( response => {
      const {_id, title, body} = response.data
      dispatch(postAdded(_id, title, body))
    })
  }



