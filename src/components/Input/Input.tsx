import React, {useCallback} from 'react'

import {TextInput, View} from 'react-native'
import {Text} from '@app/components'
import {styles} from './styles'

import {PropsType} from './types'
import {COLORS} from '@app/constants/color'

export const Input = (props: PropsType) => {
  const {
    text,
    textStyles,
    subText,
    subTextStyles,
    inputBackground = COLORS.white,
    style,
    ...restProps
  } = props

  const TextNode = useCallback(
    () => (
      <Text semiBold style={[styles.text, textStyles]}>
        {text}{' '}
        {subText && (
          <Text style={[styles.subText, subTextStyles]}>{subText}</Text>
        )}
      </Text>
    ),
    [text, textStyles, subText, subTextStyles],
  )

  const InputNode = useCallback(() => {
    return (
      <TextInput
        style={[styles.textInput, {backgroundColor: inputBackground}, style]}
        {...restProps}
      />
    )
  }, [inputBackground, restProps])

  return (
    <View style={styles.container}>
      {TextNode()}
      {InputNode()}
    </View>
  )
}
