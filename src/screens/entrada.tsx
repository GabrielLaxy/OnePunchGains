import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Image,
	TouchableOpacity,
} from 'react-native';
import { OnePunch } from '../styles/OnePunch';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const bg = require('../../assets/entrada-bg.png');
const logo = require('../../assets/OnePunchGains-logo.png');

type RootStackParamList = {
	Entrada: undefined;
	Central: undefined;
};

type EntradaScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Entrada'
>;

interface EntradaProps {
	navigation: EntradaScreenNavigationProp;
}

export default function Entrada({ navigation }: EntradaProps) {
	return (
		<View style={styles.container}>
			<ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
				<View style={styles.top}>
					<Image source={logo} style={styles.logo} />
					<Text style={styles.text}>
						“Nós, os seres humanos, somos fortes porque temos a capacidade de
						mudar a nós mesmos.”
					</Text>
				</View>
				<View style={styles.bottom}>
					<TouchableOpacity
						onPress={() => navigation.navigate('Central')}
						style={styles.button}
					>
						<Text style={styles.textButton}>ENTRAR</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bg: {
		flex: 1,
	},
	top: {
		flex: 6,
		alignItems: 'center',
	},
	logo: {
		width: 1558 / 5.2,
		height: 304 / 5.2,
		marginTop: 60,
	},
	text: {
		color: OnePunch.text,
		fontFamily: 'Montserrat_400Regular_Italic',
		textAlign: 'center',
		marginHorizontal: 50,
		marginVertical: 18,
	},
	bottom: {
		flex: 1,
		alignItems: 'center',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: OnePunch.intenseRed,
		height: 55,
		width: 250,
		borderRadius: 30,
	},
	textButton: {
		color: OnePunch.text,
		fontFamily: 'Montserrat_800ExtraBold',
		fontSize: 22,
	},
});
