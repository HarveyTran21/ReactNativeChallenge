
import { ImageSourcePropType, TouchableOpacityProps, ImageStyle, TextStyle } from 'react-native';
import { PropsType as TextPropsTypes } from '@app/components/Text/types'

export interface PropsType extends TouchableOpacityProps {
    text: string
    textProps?: TextPropsTypes
    textStyles?: TextStyle
    iconLeft?: ImageSourcePropType
    iconLeftStyle?: ImageStyle,
    buttonColor?: string
}