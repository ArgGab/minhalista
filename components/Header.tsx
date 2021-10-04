import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react"
import { Pressable, StyleSheet } from "react-native"
import { Text, View } from './Themed';

export default function Header({ setModalVisible }: any) {

    return (
        <View style={{ alignItems: 'center', justifyContent: 'flex-end', paddingTop: 10, flexDirection: 'row' }}>
            <Pressable
                style={[styles.button, styles.buttonOpen, { width: 150, marginBottom: 20, marginRight: 20 }]}
                onPress={() => { setModalVisible(true) }}
            >
                <Text style={styles.textStyle}>Cadastrar item</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        padding: 10,
        elevation: 5,
        height: 60,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonOpen: {
        backgroundColor: "red",
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
});