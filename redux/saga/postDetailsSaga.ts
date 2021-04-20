import {put} from 'redux-saga/effects';
import axios from 'axios';
import { successDetails } from '../actions/postAction';

function* postDetailsSaga(action) {
    const url = `https://simple-blog-api.crew.red/posts/${action.payload}?_embed=comments`;

    const response = yield axios.get(url);
    console.log(response);

    yield put(successDetails(response.data));
}

export default postDetailsSaga;
