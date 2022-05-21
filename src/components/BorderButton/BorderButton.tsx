import React, {useCallback} from 'react'

import {TouchableOpacity} from 'react-native'
import {Image, Text} from '@app/components'
import {styles} from './styles'

import {PropsType} from './types'
import {COLORS} from '@app/constants/color'

export const BorderButton = (props: PropsType) => {
  const {
    text,
    textProps,
    textStyles,
    buttonColor = COLORS.white,
    iconLeft,
    iconLeftStyle,
    style,
    ...restProps
  } = props

  const IconLeftNode = useCallback(() => {
    if (!iconLeft) return null
    return <Image source={iconLeft} style={[styles.iconLeft, iconLeftStyle]} />
  }, [iconLeft, iconLeftStyle])

  const TextNode = useCallback(
    () => (
      <Text semiBold style={[styles.text, textStyles]} {...textProps}>
        {text}
      </Text>
    ),
    [text, textProps, textStyles],
  )

  const buttonStyles = [styles.button, {backgroundColor: buttonColor}, style]

  return (
    <TouchableOpacity activeOpacity={0.9} style={buttonStyles} {...restProps}>
      {IconLeftNode()}
      {TextNode()}
    </TouchableOpacity>
  )
}
