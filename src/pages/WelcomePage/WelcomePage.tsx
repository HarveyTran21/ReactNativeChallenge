import React, {useCallback} from 'react'
import {
  LinearGradientBackground,
  Text,
  Image,
  BorderButton,
  Button,
} from '@app/components'
import {Alert, ScrollView, View} from 'react-native'
import {AppImages} from '@app/assets/images'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './styles'
import {PropsType} from './types'

export const WelcomePage = (props: PropsType) => {
  const onSignUpPress = useCallback(() => {
    props.navigation.navigate('SignUpPage')
  }, [])

  const onLoginPress = useCallback(() => {
    props.navigation.navigate('LoginPage')
  }, [])

  const onDevelopmentPress = useCallback(() => {
    Alert.alert('On development')
  }, [])

  const HeaderNode = useCallback(() => {
    return (
      <View style={styles.headerContainer}>
        <Image source={AppImages.FoodStyles} style={styles.headerImage} />
        <Text bold style={styles.title}>
          FoodStyles
        </Text>
      </View>
    )
  }, [])

  const LoginNode = useCallback(() => {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>
          {`Sign in to be able to save your\npreferences and settings.`}
        </Text>
        <View style={styles.loginButtonContainer}>
          <BorderButton
            text="Sign in with Apple"
            textStyles={styles.loginButtonText}
            iconLeft={AppImages.AppleLogo}
            iconLeftStyle={styles.appleIcon}
            style={styles.loginButton}
            onPress={onDevelopmentPress}
          />
          <BorderButton
            text="Sign in with Facebook"
            textStyles={styles.loginButtonText}
            iconLeft={AppImages.FacebookLogo}
            iconLeftStyle={styles.facebookIcon}
            style={styles.loginButton}
            onPress={onDevelopmentPress}
          />
          <BorderButton
            text="Sign in with Google"
            textStyles={styles.loginButtonText}
            iconLeft={AppImages.GoogleLogo}
            iconLeftStyle={styles.googleIcon}
            style={styles.loginButton}
            onPress={onDevelopmentPress}
          />
          <BorderButton
            text="Sign up with Email"
            textStyles={styles.loginButtonText}
            style={styles.loginButton}
            onPress={onSignUpPress}
          />
          <Button
            text="Log in with Email"
            textStyles={styles.loginButtonWhiteText}
            onPress={onLoginPress}
          />
        </View>
      </View>
    )
  }, [])

  const PolicyNode = useCallback(() => {
    return (
      <View style={styles.policyContainer}>
        <Text semiBold style={styles.policyText}>
          {`By signing in you accept the\n`}
          <Text style={styles.policyUnderlineText}>General Terms</Text>
          {` and `}
          <Text style={styles.policyUnderlineText}>Privacy Policy</Text>
        </Text>
      </View>
    )
  }, [])

  const BetaRibbon = useCallback(() => {
    return (
      <View style={styles.ribbonContainer}>
        <Text bold style={styles.betaText}>
          Beta Version
        </Text>
      </View>
    )
  }, [])

  return (
    <LinearGradientBackground>
      <SafeAreaView style={styles.container}>
        <View>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            {HeaderNode()}
            {LoginNode()}
            {PolicyNode()}
          </ScrollView>
        </View>
        {BetaRibbon()}
      </SafeAreaView>
    </LinearGradientBackground>
  )
}
