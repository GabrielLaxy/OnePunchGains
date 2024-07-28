import { StyleSheet } from 'react-native';
import { OnePunch } from './OnePunch';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: OnePunch.backgroud,
		justifyContent: 'center',
		gap: 0,
	},
	circleContainer: {
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	timerText: {
		color: OnePunch.text,
		fontFamily: 'Montserrat_400Regular',
		fontSize: 46,
	},
	buttonContainer: {
		justifyContent: 'center',
		flexDirection: 'row',
		gap: 20,
		marginBottom: 70,
	},
	button: {
		width: 120,
		height: 60,
		borderRadius: 20,
		backgroundColor: OnePunch.intenseRed,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: OnePunch.text,
		fontFamily: 'Montserrat_400Regular',
		fontSize: 20,
	},
});
