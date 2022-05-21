import {COLORS} from '@app/constants/color'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient'
import {styles} from './styles'

import {PropsType} from './types'

export const LinearGradientBackground = (props: PropsType) => {
  const {children} = props

  const colors = [COLORS.maize, COLORS.orangish, COLORS.orangish]

  const colorLocation = [0, 0.6, 1]

  return (
    <LinearGradient
      colors={colors}
      locations={colorLocation}
      style={styles.container}>
      {children}
    </LinearGradient>
  )
}
