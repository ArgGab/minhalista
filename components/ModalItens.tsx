import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Modal, Pressable, ScrollView, TextInput, StyleSheet } from "react-native";
import { Text, View } from '../components/Themed';

export default function ModalItens({ modalVisible, setModalVisible, itens, setItens }: any) {
    const [text, onChangeText] = useState("");
    const [categoria, setCategoria] = useState("selecione");

    const salvarItem = () => {
        let item = {
            nome: "",
            categoria: "",
            status: false,
            qtd: 0
        }
        item.nome = text
        item.categoria = categoria
        setItens([item, ...itens])
        onChangeText("")
        setCategoria("selecione")
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={[styles.centeredView, { backgroundColor: modalVisible === true ? '#191616' : 'white' }]}>
                <View style={styles.modalView}>
                    <ScrollView style={styles.container_body} >
                        <Text style={styles.titleModal}>Cadastrar Item</Text>
                        <TextInput
                            onChangeText={onChangeText}
                            value={text}
                            style={{ borderWidth: 1.5, borderRadius: 5, paddingLeft: 10, backgroundColor: 'white', height: 40, fontSize: 20 }}
                            placeholder="Nome do item"

                        />
                        <Text style={{ fontWeight: 'bold', marginTop: 50, fontSize: 20 }}>Categoria</Text>
                        <View style={{ borderWidth: 1.5, borderRadius: 5, marginTop: 10 }}>
                            <Picker
                                style={{ height: 40, textAlign: 'center' }}
                                selectedValue={categoria}
                                onValueChange={(e) => setCategoria(e)}>
                                <Picker.Item label="--Selecione--" value="selecione" />
                                <Picker.Item label="Bebidas" value="bebidas" />
                                <Picker.Item label="Cereais e Grãos" value="cereais" />
                                <Picker.Item label="Congelados e frios" value="congelados" />
                                <Picker.Item label="Guloseimas" value="guloseimas" />
                                <Picker.Item label="Higiene pessoal" value="higiene" />
                                <Picker.Item label="Hortifruti" value="hortifruti" />
                                <Picker.Item label="Laticínios" value="laticínios" />
                                <Picker.Item label="Padaria" value="padaria" />
                                <Picker.Item label="Produtos de limpeza" value="limpeza" />
                            </Picker>
                        </View>
                    </ScrollView>
                    <View style={styles.container_buttons}>
                        <Pressable
                            style={[styles.button, styles.cancelar]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={[styles.textStyle, { color: 'red' }]}>Cancelar</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.cadastrar]}
                            onPress={() => { salvarItem(), setModalVisible(!modalVisible) }}
                        >
                            <Text style={styles.textStyle}>Cadastrar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    button: {
        borderRadius: 15,
        padding: 10,
        elevation: 5,
        height: 60,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelar: {
        backgroundColor: "black",
    },
    cadastrar: {
        backgroundColor: "red",
    },
    centeredView: {
        width: '100%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: '#eae8e8',
        margin: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        width: '90%',
        minHeight: 300,
        maxHeight: 400,
        shadowColor: "#000",
        borderColor: 'black',
        borderWidth: 1.5,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    container_buttons: {
        backgroundColor: '#eae8e8',
        width: '100%',
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: 'space-evenly',
    },
    container_body: {
        backgroundColor: '#eae8e8',
        height: '50%',
        textAlign: "center",
    },
    titleModal: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }
});