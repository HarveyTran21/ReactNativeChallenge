import { useLazyQuery, useMutation } from "@apollo/client"
import { CHECK_EXISTING, SIGN_UP } from '../gql'

export const useHandler = () => {
    const [signingUp, { data, loading, error }] = useMutation(SIGN_UP)
    const [checkExisting, { data: existingData }] = useLazyQuery(CHECK_EXISTING, {
        fetchPolicy: 'no-cache'
    })

    const onSignUp = (name: string, email: string, password: string) => {
        signingUp({
            variables: {
                name, email, password
            }
        })
    }

    const onCheckExisting = (email: string) => {
        checkExisting({
            variables: {
                email
            }
        })
    }


    return {
        onSignUp, data, loading, error, existingData, onCheckExisting
    }
}