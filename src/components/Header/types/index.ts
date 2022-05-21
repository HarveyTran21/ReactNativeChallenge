
import { ImageSourcePropType, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { PropsType as TextPropsTypes } from '@app/components/Text/types'

export interface PropsType {
    text: string
    textProps?: TextPropsTypes
    textStyles?: TextStyle
    iconLeft?: ImageSourcePropType
    iconLeftStyle?: ImageStyle,
    iconLeftPress?: () => void,
    style?: ViewStyle

}