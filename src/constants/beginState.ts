import { Navbar } from './../ts/components/Navbar';
export interface GenState {
	Navbar: {
		statusAcount: {
			signIn: boolean;
			signUp: boolean;
		};
	};
}
export const beginState: GenState = {
	Navbar: {
		statusAcount: {
			signIn: false,
			signUp: false,
		},
	},
};
