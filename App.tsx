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
  ScrollView,
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
    palette: {
      primary: {
        default: 'blue',
      },
    },
    components: {
      KoiButton: {
        defaultProps: {
          variant: 'outline',
        },
      },
    },
  });
  const icon = <Icon name="search" sx={{base: {fill: '#000'}}} />;
  const options = ['Recent', 'Popular', 'Hot'];
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ThemeProvider value={theme2}>
        <ScrollView>
          <Button
            sx={theme => ({
              base: {
                backgroundColor: theme.palette.primary.default,
                marginBottom: 50,
              },
              text: {
                color: theme.palette.basic[9],
              },
            })}>
            Default Props
          </Button>
          <Button>Default Props</Button>
          {/*<Button variant="filled">Fill</Button>*/}
          <View style={styles.view}>
            <Select
              accentLeft={
                <Icon width={24} height={24} name="bar-chart-2-outline" />
              }
              cardHeight={200}
              value={0}
              label={'hello'}>
              {options.map((option, i) => {
                return (
                  <SelectItem
                    icon="checkmark-outline"
                    key={option}
                    value={i}
                    label={option}
                  />
                );
              })}
            </Select>
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
        </ScrollView>
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    /*
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',*/

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
