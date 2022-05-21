
import { TextStyle, TextInputProps } from 'react-native';

export interface PropsType extends TextInputProps {
    text: string
    textStyles?: TextStyle
    subText?: string
    subTextStyles?: TextStyle
    inputBackground?: string
}