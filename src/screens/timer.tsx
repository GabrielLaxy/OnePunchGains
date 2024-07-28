import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/timer';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { OnePunch } from '../styles/OnePunch';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cronometro() {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (isRunning) {
			timerRef.current = setInterval(() => {
				setTime(prevTime => prevTime + 1);
			}, 1000);
		} else if (!isRunning && timerRef.current) {
			clearInterval(timerRef.current);
		}
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, [isRunning]);

	const startStopTimer = async () => {
		setIsRunning(!isRunning);
		if (time > 0) {
			await AsyncStorage.setItem('lastWorkoutDuration', JSON.stringify(time));
		}
	};

	const resetTimer = async () => {
		setIsRunning(false);
		if (time > 0) {
			await AsyncStorage.setItem('lastWorkoutDuration', JSON.stringify(time));
		}
		setTime(0);
	};

	const getTime = () => {
		const hours = Math.floor(time / 3600);
		const minutes = Math.floor((time % 3600) / 60);
		const seconds = time % 60;
		return `${hours < 10 ? '0' : ''}${hours}:${
			minutes < 10 ? '0' : ''
		}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	return (
		<View style={styles.container}>
			<View style={styles.circleContainer}>
				<AnimatedCircularProgress
					size={320}
					width={15}
					fill={(time / 7200) * 100}
					tintColor={OnePunch.saitamaOrange}
					backgroundColor={OnePunch.components}
					arcSweepAngle={240}
					rotation={240}
					lineCap="round"
				>
					{() => <Text style={styles.timerText}>{getTime()}</Text>}
				</AnimatedCircularProgress>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={startStopTimer}>
					<Text style={styles.buttonText}>
						{isRunning ? 'Parar' : 'Iniciar'}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={resetTimer}>
					<Text style={styles.buttonText}>Restaurar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
