import React from 'react';
import {View} from 'react-native';
import Sign from './signature';
import {styles} from './styles';

const SigantureCanvas = () => {
  return (
    <View style={styles.container}>
      <Sign text="new library" onOK={handleSignature} />
    </View>
  );

  function handleSignature(signature: string) {
    console.log('Signature', signature);
  }
};

export default SigantureCanvas;
