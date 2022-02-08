import { getLatLngFromMapxAndMapy } from '@/utils';
import React, { useEffect, useRef, useState } from 'react';
import { NaverMap } from 'react-naver-maps';

const CustomNaverMap = (props) => {
	const { navermaps, selectedItem, selectPlase } = props;
	const cityhall = new navermaps.LatLng(37.5666805, 126.9784147);
	const oMapRef = useRef(null);
	const infoWindowRef = useRef(null);
	const [center, setCenter] = useState(cityhall.destinationPoint(0, 500));
	useEffect(() => {
		if (selectedItem) {
			// TransCoord모듈을 쓰려면 submodules에 geocoder모듈을 추가해야한다.
			//참고 : https://developers.naver.com/forum/posts/10193
			const latLng = getLatLngFromMapxAndMapy({
				navermaps,
				mapx: selectedItem?.mapx,
				mapy: selectedItem?.mapy,
			});
			const infoWindow = new navermaps.InfoWindow({
				content: `<div class="iw_inner" style="padding:10px" >
					<h3>약속 장소로 설정하기</h3>
					<p> ${selectedItem?.title}</p>
					</div>`,
			});

			infoWindowRef.current = infoWindow;
			infoWindowRef.current.open(
				oMapRef.current.instance, //찾았다 방법...
				{ lat: latLng?.y, lng: latLng?.x }
			);
			setCenter({ lat: latLng?.y, lng: latLng?.x });
			infoWindow?.getContentElement().addEventListener('click', selectPlase);
		}
		return () => {
			infoWindowRef?.current
				?.getContentElement()
				.removeEventListener('click', selectPlase);
		};
	}, [selectedItem, navermaps, selectPlase]);
	return (
		<NaverMap
			naverRef={(ref) => (oMapRef.current = ref)}
			className="map"
			mapDivId="map" // default: react-naver-map
			defaultCenter={cityhall.destinationPoint(0, 500)}
			defaultZoom={10}
			center={center}
		></NaverMap>
	);
};

export default CustomNaverMap;
