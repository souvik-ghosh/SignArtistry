import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  StyleSheet,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const VoiceRecorderPlayer = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());
  const [recordSecs, setRecordSecs] = useState(0);
  const [playTime, setPlayTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');

  useEffect(() => {
    return () => {
      audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.stopPlayer();
    };
  }, [audioRecorderPlayer]);

  const checkPermissions = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        if (
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          startRecording();
        } else {
          console.warn('All required permissions not granted');
        }
      } else {
        startRecording();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const startRecording = async () => {
    try {
      const uri = await audioRecorderPlayer.startRecorder();
      console.log('Recording started', uri);
      setIsRecording(true);

      audioRecorderPlayer.addRecordBackListener(e => {
        setRecordSecs(e.currentPosition);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      setIsRecording(false);
      console.log('Recording stopped, audio file saved at:', result);
      audioRecorderPlayer.removeRecordBackListener();
    } catch (error) {
      console.error(error);
    }
  };

  const startPlaying = async () => {
    try {
      await audioRecorderPlayer.startPlayer();
      setIsPlaying(true);

      audioRecorderPlayer.addPlayBackListener(e => {
        setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
        setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      });
    } catch (error) {
      console.error(error);
    }
  };

  const stopPlaying = async () => {
    try {
      await audioRecorderPlayer.stopPlayer();
      setIsPlaying(false);
      audioRecorderPlayer.removePlayBackListener();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Recorder and Player</Text>
      <TouchableOpacity
        style={[styles.button, isRecording && styles.recordingButton]}
        onPress={isRecording ? stopRecording : checkPermissions}>
        <Text style={styles.buttonText}>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={isPlaying ? stopPlaying : startPlaying}
        disabled={isRecording}>
        <Text style={styles.buttonText}>
          {isPlaying ? 'Stop Playing' : 'Start Playing'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.infoText}>
        Recorded Time: {audioRecorderPlayer.mmssss(Math.floor(recordSecs))}
      </Text>
      <Text style={styles.infoText}>Play Time: {playTime}</Text>
      <Text style={styles.infoText}>Duration: {duration}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginVertical: 10,
  },
  recordingButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  infoText: {
    marginTop: 10,
  },
});

export default VoiceRecorderPlayer;
