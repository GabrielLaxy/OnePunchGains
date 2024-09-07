import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar } from 'react-native';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnePunch } from '../styles/OnePunch';
import { styles } from '../styles/treinos';

type RootStackParamList = {
	Entrada: undefined;
	Central: undefined;
	Treino1: undefined;
	Treino2: undefined;
	Treino3: undefined;
	Treino4: undefined;
};

type Treino1ScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Treino1'
>;

interface Treino1Props {
	navigation: Treino1ScreenNavigationProp;
}

export default function Treino1({ navigation }: Treino1Props) {
	const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(7).fill(false));

	useEffect(() => {
		const loadCheckedItems = async () => {
			try {
				const savedCheckedItems = await AsyncStorage.getItem('checkedItemsTreino1');
				if (savedCheckedItems) {
					setCheckedItems(JSON.parse(savedCheckedItems));
				}
			} catch (error) {
				console.error('Erro ao carregar os itens concluídos', error);
			}
		};
		loadCheckedItems();
	}, []);

	const handleCheckboxChange = async (index: number) => {
		const updatedCheckedItems = [...checkedItems];
		updatedCheckedItems[index] = !updatedCheckedItems[index];
		setCheckedItems(updatedCheckedItems);
		try {
			await AsyncStorage.setItem('checkedItemsTreino1', JSON.stringify(updatedCheckedItems));
		} catch (error) {
			console.error('Erro ao salvar os itens concluídos', error);
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar animated={true} backgroundColor={OnePunch.backgroud}/>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[0]}
					onValueChange={() => handleCheckboxChange(0)}
					color={checkedItems[0] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Supino reto</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[1]}
					onValueChange={() => handleCheckboxChange(1)}
					color={checkedItems[1] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Supino inclinado com halteres</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[2]}
					onValueChange={() => handleCheckboxChange(2)}
					color={checkedItems[2] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Crucifixo máquina</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[3]}
					onValueChange={() => handleCheckboxChange(3)}
					color={checkedItems[3] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Dips</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[4]}
					onValueChange={() => handleCheckboxChange(4)}
					color={checkedItems[4] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Rosca scott</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[5]}
					onValueChange={() => handleCheckboxChange(5)}
					color={checkedItems[5] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Rosca no banco inclinado</Text>
			</View>
			<View style={styles.section}>
				<Checkbox
					style={styles.checkbox}
					value={checkedItems[6]}
					onValueChange={() => handleCheckboxChange(6)}
					color={checkedItems[6] ? OnePunch.saitamaOrange : undefined}
				/>
				<Text style={styles.paragraph}>Rosca martelo</Text>
			</View>
		</View>
	);
}
