import { OnePunch } from './OnePunch';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: 20,
		backgroundColor: OnePunch.backgroud,
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 22,
	},
	checkbox: {
		marginRight: 12,
	},
	paragraph: {
		fontFamily: 'Montserrat_500Medium',
		color: OnePunch.text,
		fontSize: 18,
	},
});
