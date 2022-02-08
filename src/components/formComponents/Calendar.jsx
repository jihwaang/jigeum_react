import React from 'react';

const CalendarFormItem = ({ onChangeForm, value, name }) => {
	return (
		<div className="container-raw">
			<div className="setting-date">
				<ion-icon name="calendar-clear-outline"></ion-icon>

				<input
					onChange={onChangeForm}
					className="input-text"
					type="datetime-local"
					name={name}
					id={name}
					value={value}
				/>
			</div>
		</div>
	);
};

export default CalendarFormItem;
