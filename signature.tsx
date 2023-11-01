import React, {useRef, useState} from 'react';
import {View, Modal, TouchableOpacity, Text} from 'react-native';
import SignatureScreen, {SignatureViewRef} from 'react-native-signature-canvas';

interface Props {
  text: string;
  onOK: (signature: string) => void;
}

const Sign: React.FC<Props> = ({text, onOK}) => {
  const ref = useRef<SignatureViewRef>(null);
  const [show, setShow] = useState(false);

  const showSignature = () => setShow(true);

  const handleSignature = (signature: string) => {
    console.log(signature);
    onOK(signature);
  };

  const handleClear = () => {
    console.log('clear success!');
    setShow(false);
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const handleEnd = () => {
    ref.current?.readSignature();
  };

  return (
    <View>
      <TouchableOpacity onPress={showSignature}>
        <Text>Show signature view</Text>
      </TouchableOpacity>
      {show && (
        <Modal>
          <SignatureScreen
            ref={ref}
            onEnd={handleEnd}
            onOK={handleSignature}
            onEmpty={handleEmpty}
            onClear={handleClear}
            autoClear={false}
            descriptionText={text}
          />
        </Modal>
      )}
    </View>
  );
};

export default Sign;
