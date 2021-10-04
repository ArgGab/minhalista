import { FontAwesome, AntDesign } from "@expo/vector-icons"
import React, { useEffect, useState } from "react"
import { FlatList, StyleSheet } from "react-native"
import { Text, View } from '../components/Themed';
import { Feather } from '@expo/vector-icons';

export default function CadastrarItem({ itens, setItens }: any) {

    const [auxItens, setAuxItens] = useState<any>([]);


    const increaseQtd = (item: any) => {
        auxItens.map((x: { nome: string; qtd: number; }) => x.nome === item.nome ? x.qtd++ : null);
        setItens(auxItens)
    }
    const decreaseQtd = (item: any) => {
        auxItens.map((x: { nome: string; qtd: number; }) => x.nome === item.nome ? x.qtd-- : null);
        setItens(auxItens)
    }

    const changeStatus = (item: any) => {
        auxItens.map((x: { nome: string; status: boolean; }) => x.nome === item.nome ? x.status = !x.status : null);
        setItens(auxItens)
    }

    const removeItem = (item: any) => {
        try {
            let aux = auxItens.filter((x: { nome: string; }) => x.nome !== item.nome)
            setItens(aux)
        }
        catch (e) {
            console.log('Done.')
        }
    }

    const UpdateAux = () => {
        setAuxItens(JSON.parse(JSON.stringify(itens)))
    }

    useEffect(() => {
        if (itens) {
            UpdateAux();
        }
    }, [itens]);

    return (
        < View style={styles.container} >
            <Text style={[styles.title, { display: itens && itens.length === 0 ? 'flex' : 'none', textAlign: 'center' }]}>Minha Lista <FontAwesome name="shopping-basket" size={30} color="red" /></Text>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                style={{ marginTop: 50, display: itens && itens.length === 0 ? 'none' : 'flex' }}
                data={auxItens}
                renderItem={({ item }) =>
                    <View key={item.nome} style={{ flex: 1, flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign name="downcircle" onPress={item.qtd === 0 ? undefined : () => decreaseQtd(item)} size={30} color={item.qtd === 0 ? 'gray' : 'red'} />
                        <Text style={{ fontSize: 30, marginLeft: 10, marginRight: 10 }}>{item.qtd}</Text>
                        <AntDesign name="upcircle" onPress={() => increaseQtd(item)} size={30} color="green" />
                        <Text style={styles.itens}>{item.nome}</Text>
                        <Feather onPress={() => removeItem(item)} style={{ marginRight: 10 }} name="trash-2" size={30} color="black" />
                        <AntDesign style={{ display: item.status === false ? 'flex' : 'none' }} onPress={() => { changeStatus(item) }} name="checkcircleo" size={30} color="red" />
                        <AntDesign style={{ display: item.status === true ? 'flex' : 'none' }} onPress={() => { changeStatus(item) }} name="checkcircle" size={30} color="green" />
                    </View>
                }
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        opacity: 0.4
    },
    itens: {
        textAlign: 'left',
        fontSize: 22,
        marginLeft: 20,
        minWidth: '45%',
        maxWidth: '60%'
    }
});