import {createStore, applyMiddleware, Store} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware, {Task} from 'redux-saga';
import {Context, createWrapper} from 'next-redux-wrapper';
import rootReducer from './reducers/rootReducer';
import rootSaga from './saga/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';


    // @ts-ignore
export interface SagaStore extends Store<State> {
    sagaTask: Task;
}

const makeStore = (context: Context) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));
    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

export const wrapper = createWrapper<SagaStore>(makeStore as any);