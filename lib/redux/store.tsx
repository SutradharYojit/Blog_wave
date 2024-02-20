import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer/combine_reducer';
import createSagaMiddleware from 'redux-saga'
// import sagaData from './api_saga/auth_service'
import sagaData from './api_saga/root_saga'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(sagaData);

export default store;