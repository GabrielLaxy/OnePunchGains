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

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [isReady, setIsReady] = useState<boolean>(false);

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync({
					Montserrat_300Light,
					Montserrat_500Medium,
					Montserrat_400Regular_Italic,
					Montserrat_400Regular,
					Montserrat_800ExtraBold,
				});
			} catch (e) {
				console.warn(e);
			} finally {
				setIsReady(true);
			}
		}
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (isReady) {
			await SplashScreen.hideAsync();
		}
	}, [isReady]);

	if (!isReady) {
		return null;
	}

	return (
		<View style={styles.teste} onLayout={onLayoutRootView}>
			<Index />
		</View>
	);
}

const styles = StyleSheet.create({
	teste: {
		flex: 1,
	},
});
