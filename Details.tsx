import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './App';
import {styles} from './styles';

type propsType = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = (props: propsType) => {
  const {navigation} = props;
  return (
    <View style={styles.details}>
      <TouchableOpacity style={styles.buttonItem} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Signature Canvas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonItem} onPress={handleButton}>
        <Text style={styles.buttonText}>PanResponder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonItem} onPress={handleVoiceRecorder}>
        <Text style={styles.buttonText}>Voice Recorder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonItem} onPress={handleAudio}>
        <Text style={styles.buttonText}>Audio live stream</Text>
      </TouchableOpacity>
    </View>
  );

  function handleButtonPress() {
    navigation.navigate('SignatureCanvas');
  }

  function handleButton() {
    navigation.navigate('SignatureCapture');
  }

  function handleVoiceRecorder() {
    navigation.navigate('VoiceRecorderPlayer');
  }

  function handleAudio() {
    navigation.navigate('AudioLiveStream');
  }
};

export default Details;
