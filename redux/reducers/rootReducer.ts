import { postsReduser, IPostsState } from './postsReducer';
import { combineReducers } from "redux";
import { State } from '../../types/state'

const rootReducer = combineReducers<State> ({
    posts: postsReduser,
})

export default rootReducer;