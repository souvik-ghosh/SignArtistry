import React, {useRef} from 'react';
import SignatureScreen, {SignatureViewRef} from 'react-native-signature-canvas';

interface Props {
  text: string;
  onOK: (signature: string) => void;
}

const Sign = (props: Props) => {
  const {text, onOK} = props;
  const ref = useRef<SignatureViewRef>(null);

  const handleSignature = (signature: string) => {
    console.log(signature);
    onOK(signature);
  };

  const handleClear = () => {
    console.log('clear success!');
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const handleEnd = () => {
    ref.current?.readSignature();
  };

  return (
    <SignatureScreen
      ref={ref}
      onEnd={handleEnd}
      onOK={handleSignature}
      onEmpty={handleEmpty}
      onClear={handleClear}
      autoClear={false}
      descriptionText={text}
    />
  );
};

export default Sign;
