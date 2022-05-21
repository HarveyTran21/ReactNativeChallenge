import { gql } from "@apollo/client";

export const SIGN_UP = gql`
mutation signUpWithEmail($name: NonEmptyString!, $email: EmailAddress!, $password: Password!) {
    signUpWithEmail(name: $name, email: $email, password: $password){
    user {
        id,
        email,
        name,
        facebookId,
        googleId,
        appleId,
    },
    accessToken,
    refreshToken
    }
}
`
export const CHECK_EXISTING = gql`
    query isExistingUserByEmail($email: EmailAddress!){
        isExistingUserByEmail(email: $email)
    }
`