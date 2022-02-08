import axios from 'axios';

/**
   * {
    "id": "5ff67a29-f216-41df-b387-7e04be83e116",
    "name": null,
    "isToBeLate": null,
    "isBanned": null,
    "lastLongitude": null,
    "lastLatitude": null
  }
   * 
  */

/**
	 * 
	 * host: formData?.host,
	// 임시로 닉네임을 저장하기 위해  uuid로 저장
	hostName: formData?.host,
	title: formData?.title,
	isPrivate: formData?.isPrivate,
	placeIn: formData?.place,
	peopleNumber: formData?.people,
	placeAt: formData?.calendar,
	beforeStart: formData['time-before'],
	afterEnd: formData['time-after'],
	password: formData?.password,
	longitude: null,
	latitude: null,
	 * */
export async function getUser(dispatch) {
	dispatch({ type: 'GET_USER' });
	try {
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));
		const userId = userInfo?.id;
		console.log({ userId });
		const response = await axios.get(
			`${process.env.REACT_APP_BASE_URL}/users/${userId}`
		);
		const { data } = response;
		console.log(data);
		localStorage.setItem('userInfo', JSON.stringify(data));

		dispatch({ type: 'GET_USER_SUCCESS', data });
	} catch (e) {
		console.log({ e });
		dispatch({ type: 'GET_USER_ERROR', error: e });
	}
}

export const createRoom = async (formData) => {
	const data = formData;
	const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/rooms`, data);
	return res;
};
