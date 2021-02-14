import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {

    const [numero, setNumero] = useState(0);

    function handleNumero() {
        // Math.floor arrendondar
        const novo_numero = Math.floor(Math.random() * 100);
        setNumero(novo_numero);
    }
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} style={style.botao}>
                <Text>Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numero: {
        fontSize: 50,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    botao: {
        backgroundColor: '#FFFFFF',
        fontSize: 20,
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10

    }

});
export default App;