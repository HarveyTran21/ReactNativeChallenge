import { useMutation } from "@apollo/client"
import { setAppInfo, setUserInfo } from "@app/states/app/reducer"
import { useEffect } from "react"
import { Alert } from "react-native"
import { useDispatch } from "react-redux"
import { UPDATE_USER } from '../gql'

export const useHandler = () => {
    const [updateProfile, { data, loading, error }] = useMutation(UPDATE_USER)
    const dispatch = useDispatch();

    const onUpdateProfile = (email: string, name: string) => {
        updateProfile({
            variables: {
                email, name
            }
        })
    }

    useEffect(() => {
        if (data && data.updateUser) {
            Alert.alert('Update successfully')
            dispatch(setUserInfo(data.updateUser))
        }
    }, [data])

    const onLogOut = () => {
        dispatch(setAppInfo({
            user: {},
            accessToken: '',
            refreshToken: ''
        }))
    }

    return {
        onUpdateProfile, loading, error, onLogOut
    }
}