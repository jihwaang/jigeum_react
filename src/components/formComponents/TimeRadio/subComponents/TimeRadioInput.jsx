import React, { Fragment } from 'react';

const TimeRadioInput = ({ onChangeForm, formData, name, beforeOrAfter }) => {
	return (
		<div className={`setting-alarm-${beforeOrAfter}`}>
			<ion-icon name="time-outline"></ion-icon>
			<span>약속 {beforeOrAfter === 'before' ? '전' : '후'}</span>
			<div className="time-container">
				{[
					{ minute: '60', label: '1시간', id: `oneHour-${beforeOrAfter}` },
					{ minute: '30', label: '30분', id: `thirty-minute-${beforeOrAfter}` },
					{
						minute: '15',
						label: '15분',
						id: `fifteen-minute-${beforeOrAfter}`,
					},
				].map((item) => (
					<Fragment key={item.id}>
						<input
							className="display-none"
							type="radio"
							name={name}
							id={item.id}
							value={item.minute}
							checked={formData[name] === item.minute}
							onChange={onChangeForm}
						/>
						<label htmlFor={item.id}>
							<span>{item.label}</span>
						</label>
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default TimeRadioInput;
