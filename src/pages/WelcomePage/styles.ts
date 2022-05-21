import { StyleSheet } from "react-native";
import { COLORS } from "@app/constants/color";
import { getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";
import { SCREEN_WIDTH } from "@app/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImage: {
        width: 74,
        height: 84,
        marginBottom: 15
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        color: COLORS.white
    },
    loginContainer: {
        paddingHorizontal: 38,
        marginTop: 25,
    },
    loginTitle: {
        fontSize: 18,
        lineHeight: 22,
        color: COLORS.white,
        textAlign: "center"
    },
    loginButtonContainer: {
        marginTop: 30,
        paddingHorizontal: 40,
    },
    loginButton: {
        marginBottom: 15
    },
    loginButtonText: {
        color: COLORS.greyishBrown
    },
    loginButtonWhiteText: {
        color: COLORS.white
    },
    appleIcon: {
        width: 14,
        height: 16,
        marginBottom: 4
    },
    facebookIcon: {
        width: 17,
        height: 17,
        marginBottom: 2
    },
    googleIcon: {
        width: 17,
        height: 17,
        marginBottom: 2
    },
    policyContainer: {
        marginTop: 38,
    },
    policyText: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 13,
        opacity: 0.8,
    },
    policyUnderlineText: {
        textDecorationLine: 'underline'
    },
    betaText: {
        color: COLORS.white,
        fontSize: 17,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    ribbonContainer: {
        backgroundColor: COLORS.red,
        paddingVertical: 8,
        position: 'absolute',
        left: -SCREEN_WIDTH / 4 - 40,
        right: SCREEN_WIDTH / 4 - 40,
        top: isIphoneX() ? getStatusBarHeight() + SCREEN_WIDTH / 8 - 20 : SCREEN_WIDTH / 8 - 20,
        transform: [{
            rotateZ: '-30deg'
        }],
    }
})