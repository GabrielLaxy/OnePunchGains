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

type Treino2ScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Treino2'
>;

interface Treino2Props {
	navigation: Treino2ScreenNavigationProp;
}

export default function Treino2({ navigation }: Treino2Props) {
	const [checkedItems, setCheckedItems] = useState<boolean[]>(
		Array(6).fill(false)
	);

	useEffect(() => {
		const loadCheckedItems = async () => {
			try {
				const savedCheckedItems = await AsyncStorage.getItem(
					'checkedItemsTreino2'
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
					'checkedItemsTreino2',
					JSON.stringify(checkedItems)
				);
				await AsyncStorage.setItem(
					'treino2Status',
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
				<Text style={styles.paragraph}>Desenvolvimento máquina</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[1]}
					onValueChange={() => toggleCheckbox(1)}
					color={checkedItems[1] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Elevação lateral</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[2]}
					onValueChange={() => toggleCheckbox(2)}
					color={checkedItems[2] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Elevação frontal com halteres</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[3]}
					onValueChange={() => toggleCheckbox(3)}
					color={checkedItems[3] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Crucifixo invertido</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[4]}
					onValueChange={() => toggleCheckbox(4)}
					color={checkedItems[4] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Tríceps testa com barra</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[5]}
					onValueChange={() => toggleCheckbox(5)}
					color={checkedItems[5] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Tríceps pulley</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[6]}
					onValueChange={() => toggleCheckbox(6)}
					color={checkedItems[6] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Tríceps corda</Text>
			</View>
		</View>
	);
}
