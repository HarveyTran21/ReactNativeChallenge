import { StyleSheet } from "react-native";
import { COLORS } from "@app/constants/color";
import { isIphoneX } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    title: {
        fontSize: 15,
        color: COLORS.greyishBrown,
        textTransform: 'uppercase',
        backgroundColor: COLORS.grey,
        paddingHorizontal: 18,
        paddingTop: 10,
    },
    titleInput: {
        fontSize: 13,
        color: COLORS.greyishBrown
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: COLORS.grey,
        paddingBottom: 100
    },
    inputContainer: {
        paddingHorizontal: 18
    },
    buttonContainer: {
        backgroundColor: COLORS.white,
        height: isIphoneX() ? 70 : 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    logoutButton: {
        alignSelf: 'center',
        paddingHorizontal: 40,
        borderWidth: 1,
        borderColor: COLORS.grey2
    },
    logoutButtonText: {
        color: COLORS.greyishBrown,
        fontSize: 13,
        lineHeight: 14,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    button: {
        alignSelf: 'center',
        paddingHorizontal: 40,
        position: 'absolute',
        top: -10
    },
    buttonText: {
        color: COLORS.white,
        textTransform: 'uppercase',
        letterSpacing: 1
    },
    errorContainer: {
        backgroundColor: COLORS.red,
        marginTop: 15,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderRadius: 4
    },
    errorText: {
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.white
    }
})