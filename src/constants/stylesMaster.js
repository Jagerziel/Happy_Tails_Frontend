import { Platform, StatusBar, StyleSheet } from "react-native"
import { colors } from "./colorPalette"
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling"

export const styleMaster = StyleSheet.create({
    parent: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + scale_mod(20): scale_mod(20),
    },
    subParent: {
        flex: 1,
        padding: scale_mod(13),
    },
    viewAllLink: {
        color: colors.secondary,
    },
    defaultFont: {
        fontSize: scale_V(16),
        fontFamily: 'RalewayRegular',
        color: colors.darkBlue,
    }
})