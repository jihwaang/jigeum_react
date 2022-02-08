import React from 'react';

const BottomListHeader = ({
	leftStates: { checked, setChecked },
	titleStates: { title, numberOfList },
	rightComponent,
}) => {
	return (
		<>
			<input
				type="checkbox"
				className="arrow-checkbox"
				name="arrow-down"
				id="arrow-down"
				onChange={(e) => {
					setChecked(e.target.checked);
				}}
				checked={checked}
			/>
			<div className="result-wrapper">
				<label className="arrow-down" htmlFor="arrow-down">
					<div className="arrow-mark"></div>
				</label>
				<h3 className="top-title">
					{title} <span>{numberOfList}</span>
				</h3>
				{rightComponent}
			</div>
		</>
	);
};

export default BottomListHeader;
