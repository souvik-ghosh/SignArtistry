import React from 'react';
import {Text, View} from 'react-native';
import Sign from './signature';
import {styles} from './styles';

const SignatureCanvas = () => {
  return (
    <View style={styles.sign}>
      <Sign text="Sign Above" onOK={handleSignature} />
      <View style={styles.wrapper}>
        <Text>
          <Text style={styles.bold}>react-native-signature-canvas: </Text>
          <Text>Popular, recently updated, and actively maintained.</Text>
        </Text>
      </View>
    </View>
  );

  function handleSignature(signature: string) {
    console.log('Signature', signature);
  }
};

export default SignatureCanvas;
