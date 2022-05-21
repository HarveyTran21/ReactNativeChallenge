import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAccessToken = async () => {
    const persistedAppInfoReducer = await AsyncStorage.getItem(
        'persist:appInfo',
    );
    if (!persistedAppInfoReducer) {
        return '';
    }
    const token = JSON.parse(JSON.parse(persistedAppInfoReducer).accessToken);
    return token;
};

export const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
