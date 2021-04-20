import { all, put, takeEvery } from 'redux-saga/effects'
import { POST_FETCHING, POST_DETAILS_FETCHING, SEND_COMMENT_REQ, success, SEND_POST_REQ, error} from '../actions/postAction'
import axios from 'axios';
import postDetailsSaga from './postDetailsSaga';
import commentsSaga from './commentsSaga';
import sendPostSaga from './newPostSaga';


function* fetchData() {
    try {
        // console.log('asdfasdf');

        const response = yield axios.get('https://simple-blog-api.crew.red/posts');
        console.log(response);

        yield put(success(response.data))
    }
    catch(err) {
        // yield put(error())
    }
}



function* rootSaga() {
    yield all([
        takeEvery(POST_FETCHING, fetchData),
        takeEvery(POST_DETAILS_FETCHING, postDetailsSaga),
        takeEvery(SEND_COMMENT_REQ, commentsSaga),
        takeEvery(SEND_POST_REQ, sendPostSaga),
    ])
}

export default rootSaga