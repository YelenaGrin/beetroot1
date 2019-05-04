import React from 'react';
import withStyles from 'react-jss';
// import './styles.css';

const styles = ({ rows }) => ({
	rows 
});

class TableRow extends React.PureComponent {
	render = () => {
		const { children = [], classes } = this.props;
		return <tr className={classes.rows}>{children}</tr>
	}
}

export default withStyles(styles)(TableRow);