import React, { useEffect, useState } from 'react';

const useGeolocation = () => {
	const [isLocating, setIsLocating] = useState(false);
	const [latLng, setLatLng] = useState({
		isSucess: false,
		lat: '',
		lng: '',
		message: '',
	});
	const onSuccess = (position) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		console.log({ latitude, longitude });
		setLatLng({ isSucess: true, lat: latitude, lng: longitude });
		setIsLocating(false);
	};
	const onError = () => {
		setLatLng({
			...latLng,
			isSucess: false,
			lat: '',
			lng: '',
			message: 'Unable to retrieve your location',
		});
	};
	useEffect(() => {
		if (!navigator.geolocation) {
			setLatLng({
				...latLng,
				isSucess: false,
				lat: '',
				lng: '',
				message: 'Geolocation is not supported by your browser',
			});
		} else {
			setIsLocating(true);
			navigator.geolocation.getCurrentPosition(onSuccess, onError);
		}
	}, []);

	return { latLng, isLocating };
};

export default useGeolocation;
