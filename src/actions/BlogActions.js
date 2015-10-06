
import { ADD_BLOG_POST, EDIT_BLOG_POST, DELETE_BLOG_POST} from '../constants/ActionTypes'
import axios from 'axios'

const URL = "http://localhost:3000/api/blogs/"


export const load = () => {
  console.log('Start loading data from server')
  return dispatch => {
    axios.get(URL).then( response => {
      console.log('Data received from server')
      response.data.map( post => {
        console.log('Processing post with id', post._id)
        dispatch(postAdded(post._id, post.title, post.body))
      })
    })
    }

}

export const postAdded = (id, title, body) => ({
  type: ADD_BLOG_POST,
  id, title, body
})

export const postDeleted = (id) => ({
  type: DELETE_BLOG_POST,
  id
})

export const deletePost = (id) => {
  console.log('Send delete request on server for id ', id)
  return dispatch => {
    axios.delete(URL+id).then(response => {
      dispatch(postDeleted(id))
    })
  }
}

export const addPost = (title, body) => {
  console.log('Ading post to server')
  return dispatch => {
    axios.post(URL, {title, body}).then( response => {
      console.log('post was saved in database')
      const {_id, title, body} = response.data
      dispatch(postAdded(_id, title, body))
    })
   }
}



