import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/theme/'
import { LoginScreen, CadastroScreen, } from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}