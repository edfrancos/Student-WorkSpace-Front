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
						id='signIn'
						className='simple-button'
						type='button'
						value='Sign In'
						onClick={(ev) => props.methods[0](ev.currentTarget.id)}
					/>
					<input
						id='signUp'
						className='button'
						type='button'
						value='Get Started'
						onClick={(ev) => props.methods[0](ev.currentTarget.id)}
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
