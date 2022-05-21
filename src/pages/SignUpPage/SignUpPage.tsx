import React, {useCallback, useEffect, useState} from 'react'
import {
  LinearGradientBackground,
  BorderButton,
  Header,
  Input,
  Text,
} from '@app/components'
import {Alert, Keyboard, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './styles'
import {PropsType} from './types'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {COLORS} from '@app/constants/color'
import {useHandler} from './handlers'
import {validateEmail} from '@app/utils'

export const SignUpPage = (props: PropsType) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setDisabled] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const {
    onSignUp,
    data: signUpData,
    error,
    loading,
    existingData,
    onCheckExisting,
  } = useHandler()

  useEffect(() => {
    if (!name || !email || !password || password.length < 6 || loading) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
    setErrorMessage('')
  }, [name, email, password, loading])

  useEffect(() => {
    if (existingData && existingData.isExistingUserByEmail) {
      setErrorMessage('User already registered')
    } else if (existingData && !existingData.isExistingUserByEmail) {
      onSignUp(name, email, password)
    }
  }, [existingData])

  useEffect(() => {
    if (error) {
      setErrorMessage(error.message)
      return
    }
    if (signUpData) {
      if (signUpData.signUpWithEmail) {
        Alert.alert('Sign up successfully')
        props.navigation.navigate('LoginPage', {
          email: signUpData.signUpWithEmail.user.email,
        })
      }
    }
  }, [signUpData, error])

  const onSignUpPress = useCallback(() => {
    Keyboard.dismiss()
    if (!validateEmail(email)) {
      setErrorMessage('Invalid Email Format')
      return
    }
    onCheckExisting(email)
  }, [name, email, password])

  return (
    <LinearGradientBackground>
      <SafeAreaView style={styles.container}>
        <Header
          text="Sign up with Email"
          iconLeftPress={props.navigation.goBack}
        />
        <KeyboardAwareScrollView
          bounces={false}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <Input text="Your name" value={name} onChangeText={setName} />
            <Input
              text="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <Input
              text="Password"
              value={password}
              onChangeText={setPassword}
              subText="(min 6 characters)"
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
            onPress={onSignUpPress}
            style={styles.button}
            text="Sign Up"
            textStyles={styles.buttonText}
            buttonColor={isDisabled ? COLORS.secondary : COLORS.slime}
            textProps={{bold: true}}
            disabled={isDisabled}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradientBackground>
  )
}
