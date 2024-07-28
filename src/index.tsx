import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnePunch } from './styles/OnePunch';

import Entrada from './screens/entrada';
import Central from './screens/central';
import Treino1 from './screens/treino1';
import Treino2 from './screens/treino2';
import Treino3 from './screens/treino3';
import Treino4 from './screens/treino4';
import Timer from './screens/timer';

const Stack = createNativeStackNavigator();

export default function Index() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Entrada"
					component={Entrada}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Central"
					component={Central}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Treino1"
					component={Treino1}
					options={{
						headerStyle: {
							backgroundColor: OnePunch.backgroud,
						},
						headerTitleAlign: 'center',
						headerTintColor: OnePunch.text,
						title: 'Peito e bíceps',
						headerTitleStyle: {
							fontFamily: 'Montserrat_500Medium',
							fontSize: 24,
						},
					}}
				/>
				<Stack.Screen
					name="Treino2"
					component={Treino2}
					options={{
						headerStyle: {
							backgroundColor: OnePunch.backgroud,
						},
						headerTitleAlign: 'center',
						headerTintColor: OnePunch.text,
						title: 'Ombro e tríceps',
						headerTitleStyle: {
							fontFamily: 'Montserrat_500Medium',
							fontSize: 24,
						},
					}}
				/>
				<Stack.Screen
					name="Treino3"
					component={Treino3}
					options={{
						headerStyle: {
							backgroundColor: OnePunch.backgroud,
						},
						headerTitleAlign: 'center',
						headerTintColor: OnePunch.text,
						title: 'Perna',
						headerTitleStyle: {
							fontFamily: 'Montserrat_500Medium',
							fontSize: 24,
						},
					}}
				/>
				<Stack.Screen
					name="Treino4"
					component={Treino4}
					options={{
						headerStyle: {
							backgroundColor: OnePunch.backgroud,
						},
						headerTitleAlign: 'center',
						headerTintColor: OnePunch.text,
						title: 'Costas',
						headerTitleStyle: {
							fontFamily: 'Montserrat_500Medium',
							fontSize: 24,
						},
					}}
				/>
				<Stack.Screen
					name="Timer"
					component={Timer}
					options={{
						headerStyle: {
							backgroundColor: OnePunch.backgroud,
						},
						headerTitleAlign: 'center',
						headerTintColor: OnePunch.text,
						title: 'Cronometro',
						headerTitleStyle: {
							fontFamily: 'Montserrat_500Medium',
							fontSize: 24,
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
