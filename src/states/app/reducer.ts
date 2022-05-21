import { AuthenticationStateType, UserType } from "@app/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: "app",
    initialState: {
        user: {},
        accessToken: '',
        refreshToken: ''
    },
    reducers: {
        setAppInfo(state, action: PayloadAction<AuthenticationStateType>) {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        },
        setUserInfo(state, action: PayloadAction<UserType>) {
            state.user = action.payload

        },
    }
})

export const { setAppInfo, setUserInfo } = appSlice.actions
export default appSlice.reducer
