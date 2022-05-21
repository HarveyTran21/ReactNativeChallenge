import { FontFamily } from "@app/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textRegular: {
        fontFamily: FontFamily.Regular
    },
    textBold: {
        fontFamily: FontFamily.Bold,
        fontWeight: '800'
    },
    textSemiBold: {
        fontFamily: FontFamily.SemiBold,
        fontWeight: '600'
    },
})