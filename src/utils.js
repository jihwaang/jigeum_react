export function calTime(isoStringDateTime, operandMinutes, operator) {
	const [hours, minutes] = isoStringDateTime.split('T')[1].split(':');
	const calculatedMinutes = calTotalMinutes({
		hours,
		minutes,
		operandMinutes,
		operator,
	});
	const newHours = Math.floor(calculatedMinutes / 60);
	const newMinutes = calculatedMinutes % 60;

	return `${formatHours(newHours)}:${formatMinutes(newMinutes)}`;
}
function calTotalMinutes({ hours, minutes, operandMinutes, operator }) {
	if (operator === '+') {
		return adjMinutes(
			parseInt(hours) * 60 + parseInt(minutes) + parseInt(operandMinutes)
		);
	}
	return adjMinutes(
		parseInt(hours) * 60 + parseInt(minutes) - parseInt(operandMinutes)
	);
}
/**
 *  분 조정 함수의 필요성
 *  오전 12:00시일경우 iso로 변환하면 T00:00인데,
 *  만약 -15분 계산해야 할 경우 시간이 음수로 표현됨
 *  이를 조정하기 위해 24*60 분을 더하고 나머지값을 이용하여
 *  항상 양수시간이 나오도록 조정
 */
function adjMinutes(minutes) {
	const minutesOfDay = 24 * 60;
	return (minutes + minutesOfDay) % minutesOfDay;
}

function formatHours(hours) {
	return `${hours > 12 ? `오후 ${hours - 12}` : `오전 ${hours}`}`;
}

function formatMinutes(minutes) {
	return `${minutes < 10 ? `0${minutes}` : minutes}`;
}

//offset in milliseconds
export function getLocalISOTime() {
	const tzoffset = new Date().getTimezoneOffset() * 60000;
	return new Date(Date.now() - tzoffset).toISOString().substring(0, 16);
}

export const debounce = (func, delay) => {
	let inDebounce;
	return function () {
		const context = this;
		const args = arguments;
		clearTimeout(inDebounce);
		inDebounce = setTimeout(() => func.apply(context, args), delay);
		// 반환되는 timeoutID는 숫자이고, setTimeout()을 호출하여 만들어진 타이머를 식별할 수 있는 0이 아닌 값 이다
		// 이 값을 clearTimeout()에 전달하면 타이머가 취소된다
	};
};

export const getLatLngFromMapxAndMapy = ({ navermaps, mapx, mapy }) => {
	try {
		if (!navermaps) {
			throw new Error('no naverMap constructor');
		}
		if (!mapx || !mapy) {
			return { x: mapx, y: mapy };
		}
		const tm128 = new navermaps.Point(mapx, mapy);
		const latLng = new navermaps.TransCoord.fromTM128ToLatLng(tm128);
		return latLng;
	} catch (e) {
		console.log(e);
	}
};
