import React, {useCallback, useEffect, useState} from 'react'
import {
  LinearGradientBackground,
  BorderButton,
  Header,
  Input,
  Text,
} from '@app/components'
import {View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './styles'
import {PropsType} from './types'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {COLORS} from '@app/constants/color'
import {useHandler} from './handlers'

export const LoginPage = (props: PropsType) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setDisabled] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const {onSignIn, error, loading} = useHandler()
  const {
    route: {params},
  } = props

  useEffect(() => {
    if (params) {
      setEmail(params.email)
    }
  }, [params])

  useEffect(() => {
    if (!email || !password || password.length < 6 || loading) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
    setErrorMessage('')
  }, [email, password])

  useEffect(() => {
    if (error) {
      setErrorMessage('Email or password is not correct')
      return
    }
  }, [error])

  const onLoginPress = useCallback(() => {
    onSignIn(email, password)
  }, [email, password])

  const onBack = useCallback(() => {
    props.navigation.navigate('WelcomePage')
  }, [])

  return (
    <LinearGradientBackground>
      <SafeAreaView style={styles.container}>
        <Header text="Login" iconLeftPress={onBack} />
        <KeyboardAwareScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <Input text="Email" value={email} onChangeText={setEmail} />
            <Input
              text="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {!!errorMessage && (
              <View style={styles.errorContainer}>
                <Text semiBold style={styles.errorText}>
                  {errorMessage}
                </Text>
              </View>
            )}
          </View>
          <BorderButton
            style={styles.button}
            text="Login"
            onPress={onLoginPress}
            disabled={isDisabled}
            textStyles={styles.buttonText}
            buttonColor={isDisabled ? COLORS.secondary : COLORS.slime}
            textProps={{bold: true}}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradientBackground>
  )
}
