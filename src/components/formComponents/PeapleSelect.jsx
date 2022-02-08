import React, { useState } from 'react';

const PeapleSelectFormItem = ({ onChangeForm, name, value }) => {
	const [checked, setChecked] = useState(false);

	const onToggle = () => {
		setChecked((prev) => !prev);
	};
	return (
		<div className="container-raw">
			<div className="setting-people">
				<ion-icon name="people-outline"></ion-icon>
				<input
					onClick={onToggle}
					className="input-text"
					type="text"
					name={name}
					id={name}
					value={`${value}명`}
					readOnly
				/>
				<label className="select-box">
					<input
						onChange={onToggle}
						type="checkbox"
						name="select-check"
						id="select-check"
						checked={checked}
					/>
					<span className="arrow-mark"></span>
				</label>
				<ul className={`options ${checked ? '' : 'display-none'} `}>
					{[2, 3, 4, 5, 6, 7, 8].map((num) => (
						<li
							className="option-item"
							onClick={(e) => {
								onToggle();
								onChangeForm(e);
							}}
							// name을 인식 못하는 문제?때문에 임시로 type에 people적용
							type={name}
							value={num}
							key={num}
						>
							{num}명
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PeapleSelectFormItem;
