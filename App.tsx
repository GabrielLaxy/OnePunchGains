import { View, StyleSheet } from 'react-native';
import Index from './src/index';
import { useState, useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Montserrat_300Light,
  Montserrat_500Medium,
  Montserrat_400Regular_Italic,
  Montserrat_400Regular,
  Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat';
import { enableScreens } from 'react-native-screens';

enableScreens();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        console.log('Loading fonts...');
        await Font.loadAsync({
          Montserrat_300Light,
          Montserrat_500Medium,
          Montserrat_400Regular_Italic,
          Montserrat_400Regular,
          Montserrat_800ExtraBold,
        });
        console.log('Fonts loaded successfully');
      } catch (e) {
        console.warn('Error loading fonts', e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      console.log('Hiding splash screen');
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
