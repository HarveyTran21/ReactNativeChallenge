import React, {useCallback} from 'react'

import {TouchableOpacity, View} from 'react-native'
import {Image, Text} from '@app/components'
import {styles} from './styles'

import {PropsType} from './types'
import {AppIcons} from '@app/assets'

export const Header = (props: PropsType) => {
  const {
    text,
    textProps,
    textStyles,
    iconLeft = AppIcons.BackIcon,
    iconLeftStyle,
    iconLeftPress,
    style,
  } = props

  const IconLeftNode = useCallback(() => {
    if (!iconLeft) return null
    return (
      <TouchableOpacity onPress={iconLeftPress} style={styles.iconLeftButton}>
        <Image source={iconLeft} style={styles.iconLeft} />
      </TouchableOpacity>
    )
  }, [iconLeft, iconLeftStyle, iconLeftPress])

  const TextNode = useCallback(
    () => (
      <Text bold style={[styles.text, textStyles]} {...textProps}>
        {text}
      </Text>
    ),
    [text, textProps, textStyles],
  )

  const viewStyles = [styles.container, style]

  return (
    <View style={viewStyles}>
      {IconLeftNode()}
      {TextNode()}
    </View>
  )
}
