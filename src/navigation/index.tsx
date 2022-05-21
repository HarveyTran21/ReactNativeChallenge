import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import {WelcomePage} from '@app/pages/WelcomePage'
import {LoginPage} from '@app/pages/LoginPage'
import {SignUpPage} from '@app/pages/SignUpPage'

import {ProfilePage} from '@app/pages/ProfilePage'

import {NavigationContainer} from '@react-navigation/native'
import type {RootStackParamList} from './types'
import {useSelector} from 'react-redux'
import {RootState} from '@app/states/types'

const Stack = createStackNavigator<RootStackParamList>()

export const AppFlow = () => {
  const state = useSelector((state: RootState) => state.app)
  const {accessToken} = state
  return (
    <NavigationContainer>
      {accessToken ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'ProfilePage'}>
          <Stack.Screen name={'ProfilePage'} component={ProfilePage} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'WelcomePage'}>
          <Stack.Screen name={'WelcomePage'} component={WelcomePage} />
          <Stack.Screen name={'SignUpPage'} component={SignUpPage} />
          <Stack.Screen name={'LoginPage'} component={LoginPage} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}
