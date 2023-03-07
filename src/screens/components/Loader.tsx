import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

export default function Loader() {
  return (
    <>
      <View style={styles.overlay} />
      <View style={styles.wrapper}>
        <View style={styles.indicatorWrapper}>
          <ActivityIndicator size={'large'} color={'brown'} />
          <Text style={styles.text}>Fetching...</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  wrapper: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    zIndex: 2,
  },
  indicatorWrapper: {
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 10,
  },
  text: {fontSize: 16, color: 'brown'},
});
