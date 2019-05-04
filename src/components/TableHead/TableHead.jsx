import React from 'react';
import withStyles from 'react-jss';
// import './styles.css';

const styles = ({ headers }) => ({
	headers 
});

class TableHead extends React.PureComponent {
	render = () => {
		const { children = [], classes } = this.props;
		return <thead className={classes.headers}>
			<tr>{children}</tr>
		</thead>
	}
}

export default withStyles(styles)(TableHead);