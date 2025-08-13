import { StyleSheet, Button, TextInput, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';

import PersonRequests from '@/services/api/PersonRequests';

export default function TabOneScreen() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function enviarFormulario(
    person: {
      nome: string;
      sobrenome: string;
      cpf: string;
      telefone: string;
      email: string
    }
  ) {
    setCarregando(true); // inicia o spinner
    try {
      const respostaPerson = await PersonRequests.postPerson(person);

      if(respostaPerson.ok) {
        console.log("Pessoa cadastrado com sucesso.");
        alert("Pessoa cadastrada com sucesso");
      } else {
        console.log("Erro ao cadastrar pessoa");
        alert("Erro ao cadastrar pessoa");
      }
    } catch (error) {
      console.log(`Erro na requisição. ${error}`);
      alert('Erro inesperado.');
    } finally {
      setCarregando(false); // finaliza o spinner
    }
  }

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
        onPress={() => enviarFormulario({
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
