import { useState } from 'react';
import { Sign, signProps } from './Sign';

interface navProps {
	statusAcount: {
		signIn: boolean;
		signUp: boolean;
	};
	sign: {
		signUp: signProps;
		signIn: signProps;
	};
	methods: Function[];
}

export const Navbar = (props: navProps) => {
	return (
		<>
			<nav id='header-nav'>
				<div id='header-info'>
					<h3>SCHEDULE MANAGER</h3>
				</div>

				<div className='buttons'>
					<input
						className='simple-button'
						type='button'
						value='Sign In'
						onClick={() => props.methods[0]('signIn')}
					/>
					<input
						className='button'
						type='button'
						value='Get Started'
						onClick={() => props.methods[0]('signUp')}
					/>
				</div>
			</nav>
			{props.statusAcount.signIn && (
				<Sign elementsData={props.sign.signIn.elementsData} />
			)}

			{props.statusAcount.signUp && (
				<Sign elementsData={props.sign.signUp.elementsData} />
			)}
		</>
	);
};
