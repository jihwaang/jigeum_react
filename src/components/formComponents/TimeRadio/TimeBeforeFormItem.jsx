import React from 'react';
import TimeRadioInput from './subComponents/TimeRadioInput';
import TimeRadioResult from './subComponents/TimeRadioResult';

const TimeBeforeFormItem = (props) => {
	return (
		<div className="container-raw">
			<TimeRadioInput {...props} beforeOrAfter="before" />
			<TimeRadioResult {...props} beforeOrAfter="before" operation="-" />
		</div>
	);
};

export default TimeBeforeFormItem;
