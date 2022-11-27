import { signProps } from './../ts/components/Sign';

interface ElementsInter {
	forms: {
		signUp: signProps;
		signIn: signProps;
	};
}

export const elements: ElementsInter = {
	forms: {
		signUp: {
			elementsData: {
				textContent: ['Sing Up', 'Have an account'],
				formElements: [
					{ label: 'Name', type: 'text' },
					{ label: 'Email', type: 'text' },
					{ label: 'Password', type: 'password' },
				],
				buttons: [
					{
						class: 'button sign-btn',
						type: 'button',
						value: 'Create Account',
					},
				],
			},
		},
		signIn: {
			elementsData: {
				textContent: ['Sign in', 'Welcome Back'],
				formElements: [
					{ label: 'Type your Username', type: 'text' },
					{ label: 'Type your Password', type: 'password' },
				],
				buttons: [
					{
						class: 'button sign-btn',
						type: 'button',
						value: 'Sign In',
					},
				],
			},
		},
	},
};
