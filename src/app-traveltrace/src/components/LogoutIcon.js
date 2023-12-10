import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function LogoutIcon({ navigation }) {

    const signOut = (navigation) => {
        navigation.reset({
            index: 0,
            routes: [{ name: "LoginScreen" }]
        })
    }

    const handleLogout = () => {
        Alert.alert('Logout', 'Tem certeza que deseja sair?', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Sair', onPress: () => signOut(navigation) },
        ]);
    };

    return (
        <TouchableOpacity onPress={handleLogout} style={styles.container}>
            <Text style={styles.text}>Sair</Text>
            <Image
                style={styles.image}
                source={require('../assets/logoutIcon.png')}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    image: {
        marginTop: 75,
        marginStart: 8,
        width: 24,
        height: 24,
    },
    text:{
        marginTop:80,
        fontWeight: 'bold'
    }
})