import React from 'react';
import withStyles from 'react-jss';
// import './styles.css';

const styles = ({ cells }) => ({
	cells
});

class TableBodyCell extends React.PureComponent {
	render = () => {
		const { children = [], classes } = this.props;
		return <td className={classes.cells}>
			{children}
		</td>
	}
}

export default withStyles(styles)(TableBodyCell);