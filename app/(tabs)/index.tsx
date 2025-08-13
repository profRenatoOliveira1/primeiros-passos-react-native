import { StyleSheet, Button, TextInput, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('@mail.com');
  const [carregando, setCarregando] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Pessoa</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        placeholder='Insira o nome'
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder='Insira o sobrenome'
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <TextInput
        placeholder='Insira o CPF'
        value={cpf}
        onChangeText={setCpf}
        inputMode='numeric'
      />
      <TextInput
        placeholder='Insira o telefone'
        value={telefone}
        onChangeText={setTelefone}
        inputMode='numeric'
      />
      <TextInput
        placeholder='Insira o e-mail'
        value={email}
        onChangeText={setEmail}
        inputMode='email'
      />
      <Button
        title='ENVIAR'
        onPress={() => sendData({
          nome: nome,
          sobrenome: sobrenome,
          cpf: cpf,
          telefone: telefone,
          email: email
        })}
      />

      {carregando && (
        <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 20 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
