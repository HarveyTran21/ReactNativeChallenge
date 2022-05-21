import React from 'react'

import {Image as NativeImage} from 'react-native'

import {PropsType} from './types'

export const Image = (props: PropsType) => {
  const {...restProps} = props

  return <NativeImage resizeMode="contain" {...restProps} />
}
