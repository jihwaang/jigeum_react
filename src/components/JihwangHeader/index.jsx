import React from 'react';
import { useHistory } from 'react-router';

const JihwangHeader = ({ title }) => {
	const history = useHistory();

	const onClick = () => {
		history.goBack();
	};
	return (
		<header>
			<nav className="navigation">
				<div onClick={onClick}>
					<ion-icon name="arrow-back-outline"></ion-icon>
				</div>
				<h3>{title}</h3>
				<ion-icon name="ellipsis-horizontal-outline"></ion-icon>
			</nav>
		</header>
	);
};

export default JihwangHeader;
