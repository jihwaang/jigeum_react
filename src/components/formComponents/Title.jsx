import React from 'react';

const TitleFormItem = ({ onChangeForm, title, name }) => {
	return (
		<div className="container-raw">
			<label className={name}>
				<input
					onChange={onChangeForm}
					value={title}
					className="input-text"
					autoFocus
					autoComplete="false"
					type="text"
					name={name}
					id={name}
					placeholder="약속 제목을 입력해주세요."
				/>
			</label>
		</div>
	);
};

export default TitleFormItem;
