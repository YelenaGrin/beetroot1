import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import createStore from './store.js';
import { BrowserRouter, Switch } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import App from './App.jsx';

//const store = createStore();  //создаем store (если store один, можно это делать внизу: <Provider store={createStore()}>)

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
			backgroundColor: 'grey',
			outline: 'none'
		}
	},
	headers: {
		backgroundColor: 'pink',
		textAlign: 'center',
		fontSize: '1.5rem',
		lineHeight: '3rem',
		margin: 5
	},
	rows: {
		lineHeight: '1.5rem'
	},
	cells: {
		border: '1px solid grey',
		"&:not(:first-child)": {
			paddingLeft: 20
		},
		"&:first-child, &:nth-child(n+5)": {
			textAlign: 'center'
		},
		"&:first-child input": {
			transform: 'scale(2)',
			verticalAlign: 'middle'
		},
		"&:not(:nth-child(5))": {
			fontStyle: 'italic'
		},
		"&:last-child": {
			fontWeight: 'bold'
		}
	}
};

//const store = createStore();
// console.log(store);

ReactDOM.render(<ThemeProvider theme={theme}>
	<BrowserRouter>
		// <Provider store={store}>
			<App />
		// </Provider>
	</BrowserRouter>
</ThemeProvider>, document.getElementById('root'));