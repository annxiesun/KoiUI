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
} from 'react-native';
import Button from './src/Button';
import {ThemeProvider} from './src/Theme';
import defaultTheme from './src/Theme/defaultTheme';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ThemeProvider value={defaultTheme}>
        <View style={styles.view}>
          <Button variant="filled" label={undefined} />
          <Button variant="outline" label={undefined} />
          <Button variant="ghost" label={undefined} />
          <Button size="small" label={undefined} />
          <Button variant="outline" size="large" label={undefined} />
          <Button size="large" label={undefined} />
        </View>
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
