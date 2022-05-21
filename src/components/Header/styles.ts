import { StyleSheet } from "react-native";
import { COLORS } from "@app/constants/color";

export const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        lineHeight: 22,
        textAlign: "center",
        color: COLORS.white
    },
    iconLeft: {
        width: 22,
        height: 40,
    },
    iconLeftButton: {
        position: 'absolute',
        left: 10,
        marginRight: 8,
        width: 40,
        height: 40,
        borderRadius: 20,
        paddingLeft: 5,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'
    }
})