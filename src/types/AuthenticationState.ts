export type UserType = {
    appleId?: string,
    email?: string,
    facebookId?: string,
    googleId?: string,
    id?: string,
    name?: string,
}

export type AuthenticationStateType = {
    user: UserType,
    accessToken: string,
    refreshToken: string
}