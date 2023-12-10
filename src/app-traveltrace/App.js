import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/theme/'
import { LoginScreen, CadastroScreen } from './src/screens'
import OrcamentoScreen from './src/screens/OrcamentoScreen'
import HomeScreen from './src/screens/HomeScreen'
import PlanejamentosScreen from './src/screens/ListaPlanejamentos'
import PlanejamentoCriado from './src/screens/PlanejamentoCriado'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="OrcamentoScreen" component={OrcamentoScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ListaPlanejamentos" component={PlanejamentosScreen} />
          <Stack.Screen name="Planejamento criado" component={PlanejamentoCriado} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
