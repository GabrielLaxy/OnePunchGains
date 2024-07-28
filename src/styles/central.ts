import { OnePunch } from './OnePunch';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	ImageBackground: {},
	logo: {
		height: 304 / 5.5,
		width: 1558 / 5.5,
		marginVertical: 25,
	},
	helloContainer: {
		height: 130,
		borderRadius: 20,
		paddingHorizontal: 20,
		flexDirection: 'row',
		gap: 20,
		backgroundColor: OnePunch.components,
	},
	leftHello: {
		flex: 1.8,
		justifyContent: 'center',
	},
	helloSub: {
		fontFamily: 'Montserrat_300Light',
		fontSize: 16,
		color: OnePunch.text,
	},
	rightHello: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	saitama: {
		height: 102,
		width: 102,
		borderRadius: 10,
	},
	components: {
		height: 572,
		paddingVertical: 20,
	},
	rowContainer: {
		flex: 1,
		flexDirection: 'row',
		gap: 20,
	},
	title: {
		fontFamily: 'Montserrat_500Medium',
		fontSize: 20,
		color: OnePunch.text,
	},
	subtitle: {
		fontFamily: 'Montserrat_500Medium',
		fontSize: 18,
		color: OnePunch.text,
	},
	leftColumn: {
		flex: 1,
		flexDirection: 'column',
		gap: 20,
	},
	topLeft: {
		flex: 0.67,
		backgroundColor: OnePunch.components,
		borderRadius: 20,
	},
	bottomLeft: {
		flex: 0.33,
		backgroundColor: OnePunch.components,
		borderRadius: 20,
	},
	rightColumn: {
		flex: 1,
		flexDirection: 'column',
		gap: 20,
	},
	topRight: {
		flex: 0.33,
		backgroundColor: OnePunch.components,
		borderRadius: 20,
	},
	bottomRight: {
		flex: 0.67,
		backgroundColor: OnePunch.components,
		borderRadius: 20,
	},
	timerContainer: {
		height: 130,
		borderRadius: 20,
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: OnePunch.components,
	},
	timerTitle: {
		flex: 0.3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberContainer: {
		flex: 0.7,
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleContainer: {
		flex: 0.6,
		alignItems: 'flex-start',
		padding: 20,
	},
	subtitleContainer: {
		flex: 0.4,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		padding: 20,
	},
	status: {
		fontFamily: 'Montserrat_300Light',
		fontSize: 18,
		color: OnePunch.text,
	},
	timer: {
		fontFamily: 'Montserrat_300Light',
		fontSize: 50,
		color: OnePunch.text,
	},
	separator: {
		marginVertical: 25,
		borderBottomColor: OnePunch.text,
		borderBottomWidth: 1,
	},
});
