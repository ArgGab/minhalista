import * as React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import CadastrarItem from '../components/CadastrarItem';
import ModalItens from '../components/ModalItens';

export default function MainScreen() {

  const [itens, setItens] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const getData = async () => {
    try {
      AsyncStorage.getItem('itens').then((dados) => {
        if (dados !== null) {
          setItens(JSON.parse(dados))
        }
      }
      )
    }
    catch (e) {
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header itens={itens} setItens={setItens} setModalVisible={setModalVisible} />
      <CadastrarItem itens={itens} setItens={setItens} />
      <ModalItens modalVisible={modalVisible} setModalVisible={setModalVisible} itens={itens} setItens={setItens} />
    </>
  );
}