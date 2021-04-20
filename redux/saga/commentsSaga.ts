import {put} from 'redux-saga/effects';
import axios from 'axios';
import { sendCommentRequest, sendCommentSuccess } from '../actions/postAction';

function* sendCommentSaga(action) {
    const url = `https://simple-blog-api.crew.red/comments`;

    const response = yield axios.post(url, {
        postId: +action.payload.postId,
        body: action.payload.body,
    }, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
    // console.log(response);

    yield put(sendCommentSuccess(response.data));
}

export default sendCommentSaga;
