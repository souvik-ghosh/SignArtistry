import React, {useState} from 'react';
import {View, StyleSheet, PanResponder} from 'react-native';

const SignatureCapture = () => {
  const [path, setPath] = useState<Array<{x: number; y: number}>>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleTouchStart = (x: number, y: number) => {
    setIsDrawing(true);
    setPath([{x, y}]);
  };

  const handleTouchMove = (x: number, y: number) => {
    if (isDrawing) {
      setPath([...path, {x, y}]);
    }
  };

  const handleTouchEnd = () => {
    setIsDrawing(false);
  };

  const renderSignaturePoints = () => {
    return path.map((point, index) => (
      <View
        key={index}
        style={[styles.signaturePoint, {left: point.x, top: point.y}]}
      />
    ));
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (event, gestureState) => {
      const {moveX, moveY} = gestureState;
      handleTouchStart(moveX, moveY);
    },
    onPanResponderMove: (event, gestureState) => {
      const {moveX, moveY} = gestureState;
      handleTouchMove(moveX, moveY);
    },
    onPanResponderRelease: () => {
      handleTouchEnd();
    },
  });

  return (
    <View style={styles.signatureContainer}>
      <View {...panResponder.panHandlers} style={styles.signatureCanvas}>
        {renderSignaturePoints()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signatureContainer: {
    flex: 1,
  },
  signatureCanvas: {
    flex: 1,
    backgroundColor: 'white',
  },
  signaturePoint: {
    width: 4,
    height: 4,
    backgroundColor: 'black',
    position: 'absolute',
  },
});

export default SignatureCapture;
