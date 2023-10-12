import { Platform, StatusBar, StyleSheet } from "react-native"
import { colors } from "./colorPalette"

export const styleMaster = StyleSheet.create({
    parent: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20: 20,
    },
    subParent: {
        flex: 1,
        padding: 13,
    },
    viewAllLink: {
        color: colors.secondary,
    }
})