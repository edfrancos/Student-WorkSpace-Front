import React from 'react';
import { useState } from 'react';
import { Navbar } from './components/Navbar';

import { beginState, GenState } from '../constants/beginState';
import { elements } from '../constants/elements';

const App = () => {
	const [GenState, setGenState] = useState<GenState>(beginState);

	const navBarHandle = (button: string): void => {
		console.log(button === 'signIn');
		if (button == 'signIn') {
			setGenState((prev) => {
				let value = !prev.Navbar.statusAcount.signIn;
				return {
					...prev,
					Navbar: {
						statusAcount: {
							signIn: value,
							signUp: false,
						},
					},
				};
			});
		}
		if (button == 'signUp') {
			setGenState((prev) => {
				let value = !prev.Navbar.statusAcount.signUp;
				return {
					...prev,
					Navbar: {
						statusAcount: {
							signIn: false,
							signUp: value,
						},
					},
				};
			});
		}
	};

	return (
		<>
			<header>
				<Navbar
					statusAcount={GenState.Navbar.statusAcount}
					methods={[navBarHandle]}
					sign={{ signUp: elements.forms.signUp, signIn: elements.forms.signIn }}
				/>
			</header>
		</>
	);
};

export default App;
