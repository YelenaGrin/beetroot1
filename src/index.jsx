import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import App from './App.jsx';

const theme = {
	palette: {
		dark: '#000',
		light: '#fff',
		primary: 'red',
		secondary: "blue"
	},
	btn: {
		backgroundColor: 'transparent',
		margin: 2,
		padding: 8,
		border: '1px solid grey',
		borderRadius: '35px',
		cursor: 'pointer',
		'&:hover': {
			color: '#fff',
			backgroundColor: 'grey'
		}
	},
	headers: {
		backgroundColor: 'pink',
		textAlign: 'center',
		lineHeight: '3rem',
		margin: 5
	},
	rows: {
		margin: 10
	}
};

ReactDOM.render(<ThemeProvider theme={theme}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</ThemeProvider>, document.getElementById('root'));