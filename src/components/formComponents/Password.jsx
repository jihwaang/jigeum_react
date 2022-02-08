import React from 'react';

const PasswordFormItem = ({ onChangeForm, value, name }) => {
	return (
		<div className="container-raw">
			<div className="setting-password">
				<input
					onChange={onChangeForm}
					value={value}
					type={name}
					name={name}
					id={name}
					className="input-text password"
					placeholder="비밀번호를 입력해주세요."
				/>
			</div>
		</div>
	);
};

export default PasswordFormItem;
