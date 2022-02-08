import React from 'react';

const IsPrivateFormItem = ({ onChangeForm, value, name }) => {
	return (
		<div className="container-raw">
			<div className="setting-private">
				<ion-icon name="lock-open-outline"></ion-icon>
				<span>비밀 약속 {value ? 'On' : 'Off'}</span>
				<label className="toggle">
					<input
						onChange={onChangeForm}
						type="checkbox"
						name={name}
						id={name}
						value={value}
					/>
					<div className="toggle-fill"></div>
				</label>
			</div>
		</div>
	);
};

export default IsPrivateFormItem;
