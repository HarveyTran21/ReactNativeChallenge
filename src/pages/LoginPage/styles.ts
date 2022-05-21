import { StyleSheet } from "react-native";
import { COLORS } from "@app/constants/color";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    contentContainer: {
        marginHorizontal: 38,
        marginBottom: 26
    },
    button: {
        alignSelf: 'center',
        paddingHorizontal: 40
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