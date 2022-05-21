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
import {useSelector} from 'react-redux'
import {RootState} from '@app/states/types'

export const ProfilePage = (props: PropsType) => {
  const userInfo = useSelector((state: RootState) => state.app.user)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isDisabled, setDisabled] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const {onUpdateProfile, loading, error, onLogOut} = useHandler()

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name || '')
      setEmail(userInfo.email || '')
    }
  }, [userInfo])

  useEffect(() => {
    if (!email || !name || loading) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
    setErrorMessage('')
  }, [email, name])

  useEffect(() => {
    if (error) {
      setErrorMessage('Update Failed')
      return
    }
  }, [error])

  const onEditProfilePress = useCallback(() => {
    onUpdateProfile(email, name)
  }, [email, name])

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text bold style={styles.title}>
          Profile
        </Text>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <Input
              textStyles={styles.titleInput}
              text="Name show on your shared card"
              value={name}
              onChangeText={setName}
              inputBackground={COLORS.secondary}
            />
            <Input
              textStyles={styles.titleInput}
              text="Email"
              value={email}
              onChangeText={setEmail}
              inputBackground={COLORS.secondary}
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
            style={styles.logoutButton}
            text="Log Out"
            onPress={onLogOut}
            textStyles={styles.logoutButtonText}
            buttonColor={COLORS.grey}
            textProps={{bold: true}}
          />
        </View>
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <BorderButton
          style={styles.button}
          text="Done"
          onPress={onEditProfilePress}
          disabled={isDisabled}
          textStyles={styles.buttonText}
          buttonColor={isDisabled ? COLORS.secondary : COLORS.slime}
          textProps={{bold: true}}
        />
      </View>
    </View>
  )
}
