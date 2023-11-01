import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const Details = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.buttonItem} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Signature Canvas</Text>
      </TouchableOpacity>
    </View>
  );

  function handleButtonPress() {
    navigation.navigate('SigantureCanvas');
  }
};

export default Details;
