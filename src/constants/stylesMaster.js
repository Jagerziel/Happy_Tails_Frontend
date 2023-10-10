import { Platform, StatusBar, StyleSheet } from "react-native"

export const styleMaster = StyleSheet.create({
    parent: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20: 20,
    },
    subParent: {
        padding: 13
    }
})