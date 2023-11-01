/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  PanResponder,
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Sign from './signature';

interface Point {
  x: number;
  y: number;
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [path, setPath] = useState<Point[]>([]);

  const handlePanResponderMove = (e: any, gestureState: any) => {
    setPath(prevPath => [
      ...prevPath,
      {x: gestureState.moveX, y: gestureState.moveY},
    ]);
  };

  const handlePanResponderEnd = () => {
    // Handle the end of the signature capture here
    // You can send the signature data to your server or store it locally.
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: handlePanResponderMove,
    onPanResponderRelease: handlePanResponderEnd,
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        {...panResponder.panHandlers}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: Dimensions.get('window').width,
          height: 200,
          borderWidth: 2,
        }}>
        {path.map((point, index) => (
          <View
            key={index}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 4,
              height: 4,
              position: 'absolute',
              left: point.x - 2,
              top: point.y - 2,
              backgroundColor: 'black',
            }}
          />
        ))}
      </View>
      <Sign text="new library" onOK={handleSignature} />
    </SafeAreaView>
  );

  function handleSignature(signature: string) {
    console.log('Signature', signature);
  }
}

export default App;
