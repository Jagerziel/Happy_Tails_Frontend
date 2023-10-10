import { Platform, StatusBar, StyleSheet } from "react-native"

export const styleMaster = StyleSheet.create({
    parent: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10: 10,
    },
    subParent: {
        padding: 10
    }
})