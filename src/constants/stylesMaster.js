import { Platform, StatusBar, StyleSheet } from "react-native"
import { colors } from "./colorPalette"
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling"

export const styleMaster = StyleSheet.create({
    parent: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + scale_mod(20): 0,
    },
    subParent: {
        flex: 1,
        padding: scale_mod(16),
    },
    viewAllLink: {
        color: colors.secondary,
        
    },
    defaultFont: {
        fontSize: scale_V(16),
        fontFamily: 'RalewayMedium',
        color: colors.darkBlue,
    },
    errorText: {
        // borderWidth: 2,
        fontSize: scale_V(13),
        fontFamily: "RalewayMedium",
        color: colors.error,
        height: scale_V(16),
        includeFontPadding: false,
    }
})