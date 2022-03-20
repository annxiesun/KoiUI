/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {Button, ThemeProvider, Typography} from './src';
import defaultTheme from './src/Theme/defaultTheme';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ThemeProvider value={defaultTheme}>
        <View style={styles.view}>
          <Button variant="filled">Filled</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="small">Smallll</Button>
          <Button variant="outline" size="large">
            Large
          </Button>
          <Button size="large">Large</Button>
        </View>
        <Typography variant="h1">Header1</Typography>
        <Typography variant="h2">Header2</Typography>
        <Typography variant="h3">Header3</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
