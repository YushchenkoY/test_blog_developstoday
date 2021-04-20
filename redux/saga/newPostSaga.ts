import {put} from 'redux-saga/effects';
import axios from 'axios';
import { sendPostRequest, sendPostSuccess } from '../actions/postAction';

function* sendPostSaga(action) {
    const url = `https://simple-blog-api.crew.red/posts`;

    const response = yield axios.post(url, {
        title: action.payload.title,
        body: action.payload.body,
    }, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
    // console.log(response);

    yield put(sendPostSuccess(response.data));
}

export default sendPostSaga;
