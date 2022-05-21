import { StyleSheet } from "react-native";
import { COLORS } from "@app/constants/color";
import { FontFamily } from "@app/constants/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        paddingTop: 15
    },
    text: {
        fontSize: 16,
        lineHeight: 18,
        textAlign: "center",
        color: COLORS.white,
        marginBottom: 7
    },
    subText: {
        fontFamily: FontFamily.Regular,
        fontWeight: 'normal'
    },
    textInput: {
        backgroundColor: COLORS.white,
        width: '100%',
        fontSize: 17,
        borderRadius: 4,
        padding: 10,
        fontFamily: FontFamily.SemiBold,
        fontWeight: '600'
    }
})