import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/treinos';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnePunch } from '../styles/OnePunch';

type RootStackParamList = {
	Entrada: undefined;
	Central: undefined;
	Treino1: undefined;
	Treino2: undefined;
	Treino3: undefined;
	Treino4: undefined;
};

type Treino3ScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Treino3'
>;

interface Treino3Props {
	navigation: Treino3ScreenNavigationProp;
}

export default function Treino3({ navigation }: Treino3Props) {
	const [checkedItems, setCheckedItems] = useState<boolean[]>(
		Array(6).fill(false)
	);

	useEffect(() => {
		const loadCheckedItems = async () => {
			try {
				const savedCheckedItems = await AsyncStorage.getItem(
					'checkedItemsTreino3'
				);
				if (savedCheckedItems !== null) {
					setCheckedItems(JSON.parse(savedCheckedItems));
				}
			} catch (error) {
				console.error('Erro ao carregar os itens concluidos', error);
			}
		};

		loadCheckedItems();
	}, []);

	useEffect(() => {
		const saveCheckedItems = async () => {
			try {
				await AsyncStorage.setItem(
					'checkedItemsTreino3',
					JSON.stringify(checkedItems)
				);
				await AsyncStorage.setItem(
					'treino3Status',
					JSON.stringify(checkedItems.every(item => item))
				);
			} catch (error) {
				console.error('Erro ao salvar os itens concluidos', error);
			}
		};

		saveCheckedItems();
	}, [checkedItems]);

	const toggleCheckbox = (index: number) => {
		const newCheckedItems = [...checkedItems];
		newCheckedItems[index] = !newCheckedItems[index];
		setCheckedItems(newCheckedItems);
	};
	return (
		<View style={styles.container}>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[0]}
					onValueChange={() => toggleCheckbox(0)}
					color={checkedItems[0] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Agachamento livre</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[1]}
					onValueChange={() => toggleCheckbox(1)}
					color={checkedItems[1] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Leg Press</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[2]}
					onValueChange={() => toggleCheckbox(2)}
					color={checkedItems[2] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Cadeira extensora</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[3]}
					onValueChange={() => toggleCheckbox(3)}
					color={checkedItems[3] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Mesa flexora</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[4]}
					onValueChange={() => toggleCheckbox(4)}
					color={checkedItems[4] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Cadeira flexora</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[5]}
					onValueChange={() => toggleCheckbox(5)}
					color={checkedItems[5] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Elevação de panturrilhas em pé</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[6]}
					onValueChange={() => toggleCheckbox(6)}
					color={checkedItems[6] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Elevação de panturrilhas sentado</Text>
			</View>
		</View>
	);
}
