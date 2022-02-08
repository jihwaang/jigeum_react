import React from 'react';

const PlaceFormItem = ({ onChangeForm, value, name, onClick }) => {
	return (
		<div className="container-raw">
			<div className="setting-place">
				<ion-icon name="location-outline"></ion-icon>
				<input
					type="text"
					name={name}
					id={name}
					onClick={onClick}
					value={value}
					onChange={onChangeForm}
					className="input-text"
					placeholder="약속 장소를 설정해주세요."
				/>
			</div>
		</div>
	);
};

export default PlaceFormItem;
