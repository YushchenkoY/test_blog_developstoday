import { Post, PostWithComment } from '../../types/posts';
import {POST_FETCHING, POST_SUCCESS, POST_ERROR, POST_DETAILS_FETCHING, POST_DETAILS_SUCCESS,SEND_COMMENT_SUCCESS ,  SEND_POST_SUCCESS, POST_DETAILS_ERROR} from '../actions/postAction'

export interface IPostsState {
    isloading: boolean;
    data: Post[];
    details: PostWithComment;
}

interface IAction {
    type: string;
    payload: Post[];
}

const initialState: IPostsState = {
    isloading: false,
    data: [],
    details: null
};

export const postsReduser = (state: IPostsState = initialState, action: IAction) => {
    switch (action.type) {
        case POST_FETCHING:
            return {...state, isloading: true} ;
        case POST_SUCCESS:
            return {
                ...state,
                isloading: false, 
                data: action.payload};
        case POST_ERROR:
            return state;
        case POST_DETAILS_FETCHING:
            return {...state, isloading: true};
            
        case POST_DETAILS_SUCCESS:
            return {
                ...state,
                isloading: false,
                details: action.payload,
                
            };
            
            
        case SEND_COMMENT_SUCCESS:
            return {
                ...state,
                isloading: false,
                details: {
                    ...state.details,
                    comments: [
                        ...state.details.comments,
                        action.payload,
                    ]
                },
                
            };

        case SEND_POST_SUCCESS:
            return {
                ...state,
                isloading: false,
                data: [
                    ...state.data,
                    action.payload,
                ],
            };





        default:
            return state;
    }
}