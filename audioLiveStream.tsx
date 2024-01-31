import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LiveAudioStream from 'react-native-live-audio-stream';
import {Buffer} from 'buffer';

const AudioLiveStream = () => {
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    const options = {
      sampleRate: 32000,
      channels: 1,
      bitsPerSample: 16,
      audioSource: 6,
      bufferSize: 4096,
      wavFile: 'test.wav',
    };

    LiveAudioStream.init(options);

    const onData = (data: string) => {
      // Handle the base64-encoded audio data chunks
      const chunk = Buffer.from(data, 'base64');
      // We can send the data to a server for further processing
      console.log('Received audio data:', chunk);
    };

    LiveAudioStream.on('data', onData);

    return () => {
      LiveAudioStream.stop(); 
    };
  }, []);

  const toggleStreaming = () => {
    if (isStreaming) {
      LiveAudioStream.stop();
    } else {
      LiveAudioStream.start();
    }
    setIsStreaming(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          isStreaming ? styles.streamingButton : styles.notStreamingButton,
        ]}
        onPress={toggleStreaming}>
        <Text style={styles.toggleButtonText}>
          {isStreaming ? 'Stop Streaming' : 'Start Streaming'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButton: {
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  toggleButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  streamingButton: {
    backgroundColor: 'green',
  },
  notStreamingButton: {
    backgroundColor: 'blue',
  },
});

export default AudioLiveStream;
