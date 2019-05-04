import React from 'react';
import withStyles from 'react-jss';
// import './styles.css';

// const styles = (theme) => ({
// 	root: {
// 		display: 'flex',
// 		fontFamily: 'arial',
// 		color: (props) => props.titleColor || 'blue',
// 		justifyContent: 'space-between'
// 	}
// });
// // то же самое, что выше (функция возвращает объект)
const styles = ({ palette: { secondary } }) => {
	// console.log(theme);
	return {
		root: {
			display: 'flex',
			fontFamily: 'arial',
			color: (props) => props.titleColor || secondary,
			justifyContent: 'space-between'
		}
	}
};

// const styles = ({ palette: { secondary } }) => {
// 	return {
// 		root: {
// 		// fontSize: 12,
// 			color: (props) 'blue',
//  			display: 'flex',
// 			fontFamily: 'arial',
// 			justifyContent: 'space-between'
// 		}
// 	}
// });

class Toolbar extends React.PureComponent {
	render = () => {
		const { title = '', children = [], classes } = this.props;
		return <div className={classes.root}>
			<h1>{title}</h1>
			<div>
				{children}
			</div>
		</div>
	}
}

export default withStyles(styles)(Toolbar);