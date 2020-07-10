import React from 'react';
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { reducer } from './GlobalContextProvider';

export default ({ children }) => {
    const persistConfig = {
        key: 'root',
        storage,
    }

    const persistedReducer = persistReducer(persistConfig, reducer)

    let store = createStore(persistedReducer);
    let persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>);
}
