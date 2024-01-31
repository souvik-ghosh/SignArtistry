import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './home';
import SignatureCanvas from './signatureCanvas';
import SignatureCapture from './noLibrary';
import Details from './Details';
import VoiceRecorderPlayer from './voiceRecorder';
import AudioLiveStream from './audioLiveStream';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  SignatureCanvas: undefined;
  SignatureCapture: undefined;
  VoiceRecorderPlayer: undefined;
  AudioLiveStream: undefined;
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
        <Stack.Screen
          name="VoiceRecorderPlayer"
          component={VoiceRecorderPlayer}
        />
        <Stack.Screen name="AudioLiveStream" component={AudioLiveStream} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
