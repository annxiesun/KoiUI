/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {ReactNode} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {
  Button,
  ThemeProvider,
  Typography,
  Icon,
  IconButton,
  Input,
  Select,
  SelectItem,
} from './src';
import {defaultTheme, createTheme} from './src/Theme';

const App: () => ReactNode = () => {
  const isDarkMode = useColorScheme() === 'dark';

  let theme2 = createTheme(defaultTheme, {
    typography: {
      body1: {
        fontFamily: 'Poppins',
        fontWeight: '600',
      },
    },
  });
  const icon = <Icon name="search" />;
  const options = ['Recent', 'Popular', 'Hot'];
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ThemeProvider value={theme2}>
        <View style={styles.view}>
          <Select value={0} label={'hello'}>
            {options.map((option, i) => {
              return <SelectItem key={option} value={i} label={option} />;
            })}
          </Select>
          <Button variant="default">Filled</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="small">Smallll</Button>
          <Button
            variant="outline"
            size="large"
            accentRight={icon}
            accentLeft={icon}>
            Large
          </Button>
          <Button size="large">Large</Button>
          <IconButton name="github" />
          <IconButton size="small" name="search" />
          <IconButton size="large" name="settings" />
          <Icon name="settings" />
        </View>
        <Typography variant="h1">Header1</Typography>
        <Typography variant="h2">Header2</Typography>
        <Typography variant="h3">Header3</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
        <Input placeholder="Search" accentLeft={<Icon name="search" />} />
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

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
