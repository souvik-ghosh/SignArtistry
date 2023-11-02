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
      <TouchableOpacity style={styles.buttonItem} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>PanResponder</Text>
      </TouchableOpacity>
    </View>
  );

  function handleButtonPress() {
    navigation.navigate('SignatureCanvas');
  }
};

export default Details;
