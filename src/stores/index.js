import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import blog from './blog'

const rootReducer = combineReducers({
  blog
})

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}

