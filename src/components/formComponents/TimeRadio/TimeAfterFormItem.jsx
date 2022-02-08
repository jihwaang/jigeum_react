import React from 'react';
import TimeRadioInput from './subComponents/TimeRadioInput';
import TimeRadioResult from './subComponents/TimeRadioResult';

const TimeAfterFormItem = (props) => {
	return (
		<div className="container-raw">
			<TimeRadioInput {...props} beforeOrAfter="after" />
			<TimeRadioResult {...props} beforeOrAfter="after" operation="+" />
		</div>
	);
};

export default TimeAfterFormItem;
