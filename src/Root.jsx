import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import { UserProvider } from './contextApis/authContext';

const Root = () => (
	<BrowserRouter>
		<UserProvider>
			<App />
		</UserProvider>
	</BrowserRouter>
);

export default Root;
