import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './App';

type propsType = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = (props: propsType) => {
  const {navigation} = props;
  return (
    <ImageBackground source={require('./bg1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>SignArtistry</Text>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  function handleButtonPress() {
    navigation.navigate('Details');
  }
};

export default Home;
