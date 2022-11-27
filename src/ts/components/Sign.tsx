import { elements } from '../../constants/elements';

export interface signProps {
	elementsData: {
		textContent: string[];
		formElements: {
			label: string;
			type: string;
		}[];
		buttons: {
			class: string;
			type: string;
			value: string;
		}[];
	};
}

export const Sign = (props: signProps) => {
	const content = props.elementsData;

	//
	const formFragments = content.formElements.map((element) => {
		return (
			<>
				<label>{element.label}</label>
				<input type={element.type} />
			</>
		);
	});
	const formButtons = content.buttons.map((element) => {
		return <button className={element.class}>{element.value}</button>;
	});

	return (
		<section id='sign-content'>
			{
				<div className='text-content'>
					<h2>{content.textContent[0]}</h2>
					<h4>{content.textContent[1]}</h4>
				</div>
			}
			<form className='form-wraper'>
				{formFragments}
				{formButtons}
			</form>
		</section>
	);
};
