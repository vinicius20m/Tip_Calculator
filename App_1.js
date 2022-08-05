
import React, { useState } from "react" ;
import { Text, View, Button, Alert } from 'react-native' ;
import styled from 'styled-components/native' ;

const Page = styled.SafeAreaView`

  flex: 1;
  justify-content: center;
  align-items: center;
` ;

const Input = styled.TextInput`

  width: 200px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 10px;
` ;

const Quadrado = styled.View`

  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 3px dashed #000;
  margin-top: 30px;
` ;

const Hello = ({frase}) => {

  const [ name, setName ] = useState('Mack1') ;
  const [ show, setShow ] = useState(false) ;

  const handleButtonPress = () => {
    // Alert.alert('salvando')

    // setName('Mack1')
    setShow(!show)
  }

  return (
    <View>
      <Text>{frase}</Text>
      <Text style={{marginBottom: 10}}> Projeto: {name} </Text>

      {/* <Input value={name} onChangeText={setName} /> */}
      <Input value={name} onChangeText={v=>setName(v.toUpperCase())} style={{marginBottom: 10}} />

      <Button
        title={(show ? 'Esconder' : 'Mostrar') + ' Texto'}
        onPress={handleButtonPress}
      />

      {show &&
        <Quadrado>
          <Text>{name}</Text>
        </Quadrado>
      }
    </View>
  ) ;
}

export default () => {

  return (

    <Page>
      <Hello frase="Hello World!!" />
    </Page>
  ) ;
}
