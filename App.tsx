import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './home';
import Details from './details';
import SignatureCanvas from './signatureCanvas';
import SignatureCapture from './noLibrary';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  SignatureCanvas: undefined;
  SignatureCapture: undefined;
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
        <Stack.Screen name="SignatureCanvas" component={SignatureCanvas} />
        <Stack.Screen name="SignatureCapture" component={SignatureCapture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
