import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container :{
        flex: 1,
        width: "100%",
        borderRadius: 8,
        alignItems: "center",
        paddingLeft: 30,
        paddingRight: 30,
        gap: 20

    },
        subContainer :{
        width: "100%",
        justifyContent: "center",
        gap: 12,
        fontWeight: "800"
    },
    inputContainer:{
        gap:4
    },
    title: {
        color:"#333333",
        fontSize: 24,
        fontWeight: 600
    },
        subTitle: {
        color:"#333333",
        fontSize: 18,
        fontWeight: 800
    }
})