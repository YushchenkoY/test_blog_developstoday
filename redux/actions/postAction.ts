export const POST_FETCHING = 'POST_FETCHING';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_ERROR = 'POST_ERROR';

export const POST_DETAILS_FETCHING = 'POST_DETAILS_FETCHING';
export const POST_DETAILS_SUCCESS = 'POST_DETAILS_SUCCESS';
export const POST_DETAILS_ERROR = 'POST_DETAILS_ERROR';

export const SEND_COMMENT_REQ = 'SEND_COMMENT_REQ';
export const SEND_COMMENT_SUCCESS = 'SEND_COMMENT_SUCCESS';
export const SEND_COMMENT_ERROR = 'SEND_COMMENT_ERROR';

export const SEND_POST_REQ = 'SEND_POST_REQ';
export const SEND_POST_SUCCESS = 'SEND_POST_SUCCESS';
export const SEND_POST_ERROR = 'SEND_POST_ERROR';

export function fetching() {
    return {
        type: POST_FETCHING,
        payload: ''
    }
};
export function success(data1: any) {
    return {
        type: POST_SUCCESS,
        payload: data1
    }
};
export function error() {
    return {
        type: POST_ERROR,
        payload: ''
    }
}


export function fetchingDetails(postId: string) {
    return {
        type: POST_DETAILS_FETCHING,
        payload: postId
    }
};

export function successDetails(data1: any) {
    return {
        type: POST_DETAILS_SUCCESS,
        payload: data1
    }
};


export function errorDetails() {
    return {
        type: POST_DETAILS_ERROR,
        payload: ''
    }
}

export function sendCommentRequest(postId: string, body: string) {
    return {
        type: SEND_COMMENT_REQ,
        payload: {
            postId: postId,
            body: body
        }
    }
};

export function sendCommentSuccess(response: any) {
    return {
        type: SEND_COMMENT_SUCCESS,
        payload: response
    }
};

export function sendPostRequest(title: string, body: string) {
    return {
        type: SEND_POST_REQ,
        payload: {
            title: title,
            body: body
        }
    }
};

export function sendPostSuccess(response: any) {
    return {
        type: SEND_POST_SUCCESS,
        payload: response
    }
};
