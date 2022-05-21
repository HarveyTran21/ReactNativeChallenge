import { useMutation } from "@apollo/client"
import { setAppInfo } from "@app/states/app/reducer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { SIGN_IN, } from '../gql'

export const useHandler = () => {
    const [signingIn, { data, loading, error }] = useMutation(SIGN_IN)
    const dispatch = useDispatch();

    const onSignIn = (email: string, password: string) => {
        signingIn({
            variables: {
                email, password
            }
        })
    }

    useEffect(() => {
        if (data && data.loginWithEmail) {
            console.log('🚀 ~ file: index.ts ~ line 22 ~ useEffect ~ data', data)
            dispatch(setAppInfo(data.loginWithEmail))
        }
    }, [data])

    return {
        onSignIn, data, loading, error
    }
}