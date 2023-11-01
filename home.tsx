import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const Home = () => {
  const navigation = useNavigation();
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
