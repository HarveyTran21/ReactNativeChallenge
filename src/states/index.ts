import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/reducer';

import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appInfoPersistConfig = {
    key: 'appInfo',
    storage: AsyncStorage,
};


export const store = configureStore({
    reducer: {
        app: persistReducer(appInfoPersistConfig, appReducer)
    }
});
