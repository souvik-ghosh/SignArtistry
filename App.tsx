import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './home';
import Details from './details';
import SigantureCanvas from './signatureCanvas';

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  SigantureCanvas: undefined;
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="SigantureCanvas" component={SigantureCanvas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
