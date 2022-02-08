import { calTime } from '@/utils';
import React from 'react';

const TimeRadioResult = ({ formData, name, beforeOrAfter, operation }) => {
	return (
		<div className={`time-${beforeOrAfter}-detail-container`}>
			<span className="selected-time">
				{calTime(formData.calendar, formData[name], operation)}
			</span>
			<span className="from">
				{beforeOrAfter === 'before' ? '부터' : '까지'}
			</span>
		</div>
	);
};

export default TimeRadioResult;
