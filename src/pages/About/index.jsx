import React, { useEffect } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';

const About = () => {
	const history = useHistory();
	const location = useLocation();
	const match = useRouteMatch();
	useEffect(() => {
		console.log({ history });
		console.log({ location });
		console.log({ match });
	}, [history, location, match]);
	return (
		<div>
			<h2>About {match?.params?.name ?? 'none'}</h2>
		</div>
	);
};

export default About;
