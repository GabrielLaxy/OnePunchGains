import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { styles } from '../styles/central';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const logo = require('../../assets/OnePunchGains-logo.png');
const saitama = require('../../assets/SaitamaWorkOut.png');
const background = require('../../assets/Opm.png');

type RootStackParamList = {
	Entrada: undefined;
	Central: undefined;
	Treino1: undefined;
	Treino2: undefined;
	Treino3: undefined;
	Treino4: undefined;
	Timer: undefined;
};

type CentralScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Central'
>;

interface CentralProps {
	navigation: CentralScreenNavigationProp;
}

const Separator = () => <View style={styles.separator} />;

const getStatus = (checkedItems: boolean[]) => {
	const totalChecked = checkedItems.filter(item => item).length;
	if (totalChecked === checkedItems.length) {
		return 'Concluído💪🏼';
	} else if (totalChecked > 0) {
		return 'Treinando';
	} else {
		return 'Faltante';
	}
};

export default function Central({ navigation }: CentralProps) {
	const isFocused = useIsFocused();
	const [statusTreino1, setStatusTreino1] = useState('Faltante');
	const [statusTreino2, setStatusTreino2] = useState('Faltante');
	const [statusTreino3, setStatusTreino3] = useState('Faltante');
	const [statusTreino4, setStatusTreino4] = useState('Faltante');
	const [lastWorkoutDuration, setLastWorkoutDuration] = useState('00:00');

	const fetchCheckedItems = async () => {
		try {
			const savedCheckedItemsTreino1 = await AsyncStorage.getItem(
				'checkedItemsTreino1'
			);
			const savedCheckedItemsTreino2 = await AsyncStorage.getItem(
				'checkedItemsTreino2'
			);
			const savedCheckedItemsTreino3 = await AsyncStorage.getItem(
				'checkedItemsTreino3'
			);
			const savedCheckedItemsTreino4 = await AsyncStorage.getItem(
				'checkedItemsTreino4'
			);

			const checkedItemsTreino1 = savedCheckedItemsTreino1
				? JSON.parse(savedCheckedItemsTreino1)
				: [];
			const checkedItemsTreino2 = savedCheckedItemsTreino2
				? JSON.parse(savedCheckedItemsTreino2)
				: [];
			const checkedItemsTreino3 = savedCheckedItemsTreino3
				? JSON.parse(savedCheckedItemsTreino3)
				: [];
			const checkedItemsTreino4 = savedCheckedItemsTreino4
				? JSON.parse(savedCheckedItemsTreino4)
				: [];

			setStatusTreino1(getStatus(checkedItemsTreino1));
			setStatusTreino2(getStatus(checkedItemsTreino2));
			setStatusTreino3(getStatus(checkedItemsTreino3));
			setStatusTreino4(getStatus(checkedItemsTreino4));

			if (
				getStatus(checkedItemsTreino1) === 'Concluído💪🏼' &&
				getStatus(checkedItemsTreino2) === 'Concluído💪🏼' &&
				getStatus(checkedItemsTreino3) === 'Concluído💪🏼' &&
				getStatus(checkedItemsTreino4) === 'Concluído💪🏼'
			) {
				await AsyncStorage.multiRemove([
					'checkedItemsTreino1',
					'checkedItemsTreino2',
					'checkedItemsTreino3',
					'checkedItemsTreino4',
				]);
				setStatusTreino1('Faltante');
				setStatusTreino2('Faltante');
				setStatusTreino3('Faltante');
				setStatusTreino4('Faltante');
			}
			const lastWorkout = await AsyncStorage.getItem('lastWorkoutDuration');
			if (lastWorkout !== null) {
				const duration = JSON.parse(lastWorkout);
				const hours = Math.floor(duration / 3600);
				const minutes = Math.floor((duration % 3600) / 60);
				setLastWorkoutDuration(
					`${hours < 10 ? '0' : ''}${hours}:${
						minutes < 10 ? '0' : ''
					}${minutes}`
				);
			}
		} catch (error) {
			console.error('Erro ao carregar os itens concluidos', error);
		}
	};

	useEffect(() => {
		if (isFocused) {
			fetchCheckedItems();
		}
	}, [isFocused]);

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }} overScrollMode="never">
			<ImageBackground style={styles.ImageBackground} source={background}>
				<View style={styles.container}>
					<Image source={logo} style={styles.logo} />
					<View style={styles.helloContainer}>
						<View style={styles.leftHello}>
							<Separator />
							<Text style={styles.title}>Olá, Gabriel</Text>
							<Text style={styles.helloSub}>O que vai treinar hoje?</Text>
							<Separator />
						</View>
						<View style={styles.rightHello}>
							<Image source={saitama} style={styles.saitama} />
						</View>
					</View>
					<View style={styles.components}>
						<View style={styles.rowContainer}>
							<View style={styles.leftColumn}>
								<TouchableOpacity
									onPress={() => navigation.navigate('Treino1')}
									style={styles.topLeft}
								>
									<View style={styles.titleContainer}>
										<Text style={styles.title}>Peito e{'\n'}bíceps</Text>
									</View>
									<View style={styles.subtitleContainer}>
										<Text style={styles.subtitle}>Status</Text>
										<Text style={styles.status}>{statusTreino1}</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => navigation.navigate('Treino2')}
									style={styles.bottomLeft}
								>
									<View style={styles.titleContainer}>
										<Text style={styles.title}>Ombro e{'\n'}tríceps</Text>
									</View>
									<View style={styles.subtitleContainer}>
										<Text style={styles.subtitle}>Status</Text>
										<Text style={styles.status}>{statusTreino2}</Text>
									</View>
								</TouchableOpacity>
							</View>
							<View style={styles.rightColumn}>
								<TouchableOpacity
									onPress={() => navigation.navigate('Treino3')}
									style={styles.topRight}
								>
									<View style={styles.titleContainer}>
										<Text style={styles.title}>Perna</Text>
									</View>
									<View style={styles.subtitleContainer}>
										<Text style={styles.subtitle}>Status</Text>
										<Text style={styles.status}>{statusTreino3}</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => navigation.navigate('Treino4')}
									style={styles.bottomRight}
								>
									<View style={styles.titleContainer}>
										<Text style={styles.title}>Costas</Text>
									</View>
									<View style={styles.subtitleContainer}>
										<Text style={styles.subtitle}>Status</Text>
										<Text style={styles.status}>{statusTreino4}</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<TouchableOpacity
						onPress={() => navigation.navigate('Timer')}
						style={styles.timerContainer}
					>
						<View style={styles.timerTitle}>
							<Text style={styles.title}>Duração do último treino:</Text>
						</View>
						<View style={styles.numberContainer}>
							<Text style={styles.timer}>{lastWorkoutDuration}</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</ScrollView>
	);
}
