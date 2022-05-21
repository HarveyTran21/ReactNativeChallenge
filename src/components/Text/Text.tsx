import React from 'react'

import {Text as NativeText} from 'react-native'

import {PropsType} from './types'

import {styles} from './styles'

export const Text = (props: PropsType) => {
  const {bold, semiBold, style, ...restProps} = props

  let textStyles = style
  if (bold) {
    textStyles = [styles.textBold, style]
  } else if (semiBold) {
    textStyles = [styles.textSemiBold, style]
  } else {
    textStyles = [styles.textRegular, style]
  }

  return <NativeText style={textStyles} {...restProps} />
}
