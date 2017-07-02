import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../root-reducer';
import { rootSaga } from '../root-saga';

const logger = createLogger({
    collapsed: true,
    level: 'debug'
});
const router = routerMiddleware(hashHistory);
const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
    applyMiddleware(reduxImmutableStateInvariant(), sagaMiddleware, router, logger),
    window.devToolsExtension ? window.devToolsExtension() : (noop) => noop
);

export function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept('../root-reducer', () =>
            store.replaceReducer(require('../root-reducer').default)
        );
    }

    return store;
}