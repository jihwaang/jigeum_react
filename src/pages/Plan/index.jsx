import { createRoom } from '@/apis';
import {
	CalendarFormItem,
	IsPrivateFormItem,
	PasswordFormItem,
	PeapleSelectFormItem,
	PlaceFormItem,
	TitleFormItem,
} from '@/components/formComponents';
import TimeAfterFormItem from '@/components/formComponents/TimeRadio/TimeAfterFormItem';
import TimeBeforeFormItem from '@/components/formComponents/TimeRadio/TimeBeforeFormItem';
import JihwangHeader from '@/components/JihwangHeader';
import SearchPlan from '@/components/Modals/SearchPlan';
import { useUserState } from '@/contextApis/authContext';
import useAsync from '@/hooks/useAsync';
import useGeolocation from '@/hooks/useGeolocation';
import { getLocalISOTime } from '@/utils';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const initFormData = {
	host: null,
	title: '',
	place: '',
	isPrivate: false,
	password: '',
	people: 2,
	calendar: getLocalISOTime(),
	'time-before': '15',
	'time-after': '15',
	lat: '',
	lng: '',
};

const parseRoomFormData = (formData) => ({
	host: formData?.host,
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
	longitude: formData?.lng,
	latitude: formData?.lat,
});
const Plan = () => {
	// 테스트
	const history = useHistory();
	const userState = useUserState();
	const { data: user, loading, error } = userState.user;
	const { latLng, isLocating } = useGeolocation();
	console.log({ latLng, isLocating });

	const [formData, setFormData] = useState(initFormData);
	const [modalHidden, setModalHidden] = useState(false);
	const [res, createRoomAction] = useAsync(
		createRoom,
		[formData],
		parseRoomFormData(formData),
		false
	);

	const onChangeForm = (e) => {
		const { name, value, checked, type } = e.target;
		if (type === 'checkbox') {
			setFormData({ ...formData, [name]: checked });
			return;
		}
		// 진짜 안좋은 방법.. 임시방편
		if (type === 'people') {
			setFormData({ ...formData, people: value ?? '' });

			return;
		}
		setFormData({ ...formData, [name]: value ?? '' });
	};

	const onSelectPlace = (place) => {
		setFormData({ ...formData, place });
	};
	// 매번 확안하는 방법
	useEffect(() => {
		console.log(parseRoomFormData(formData));
	}, [formData]);

	useEffect(() => {
		if (user) {
			setFormData({ ...formData, host: user?.id });
		}
	}, [user]);
	useEffect(() => {
		if (latLng.isSucess) {
			setFormData((f) => ({ ...f, lat: latLng.lat, lng: latLng.lng }));
		}
	}, [latLng]);
	if (loading) return <div>로딩중..</div>;
	if (error) return <div>에러가 발생했습니다</div>;
	if (!user) return null;
	// console.log({ user });
	return (
		<>
			<JihwangHeader title={'약속 만들기'} />
			<main>
				<form className="container-plan">
					<TitleFormItem
						onChangeForm={onChangeForm}
						value={formData?.title}
						name="title"
					/>
					{/* <div className="container-raw">
						<div className="room-url">
							<ion-icon name="infinite-outline"></ion-icon>
							<span>https://jiguem.herokuapp.com/room/</span>
							<ion-icon name="share-social-outline"></ion-icon>
						</div>
					</div> */}
					<IsPrivateFormItem
						onChangeForm={onChangeForm}
						value={formData?.isPrivate}
						name="isPrivate"
					/>
					{formData?.isPrivate && (
						<PasswordFormItem
							onChangeForm={onChangeForm}
							value={formData?.password}
							name="password"
						/>
					)}
					<PlaceFormItem
						onClick={() => setModalHidden((prev) => !prev)}
						onChangeForm={onChangeForm}
						value={formData?.place}
						name="place"
					/>
					<PeapleSelectFormItem
						onChangeForm={onChangeForm}
						value={formData?.people}
						name="people"
					/>
					<CalendarFormItem
						onChangeForm={onChangeForm}
						value={formData?.calendar}
						name="calendar"
					/>
					<TimeBeforeFormItem
						onChangeForm={onChangeForm}
						formData={formData}
						name="time-before"
					/>
					<TimeAfterFormItem
						onChangeForm={onChangeForm}
						formData={formData}
						name="time-after"
					/>
				</form>
				{/* <button type="button" className="button-container">
                <ion-icon name="checkmark-outline"></ion-icon><span>완료</span>
            </button>  */}
				<button
					type="button"
					className="button-container"
					disabled={isLocating}
					style={{
						backgroundColor: isLocating ? 'grey' : '',
						cursor: isLocating
							? 'autohttps://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze'
							: '',
					}}
					onClick={async () => {
						await createRoomAction();

						console.log({ res });
						const roomId = res?.data?.data?.id;
						if (roomId) {
							history.push(`/room/${roomId}`);
						} else {
							alert('룸 생성 실패');
						}
					}}
				>
					<ion-icon name="log-in-outline"></ion-icon>

					<span>{isLocating ? '현재위치 탐색중...' : '참여하기'}</span>
				</button>
			</main>

			{modalHidden && (
				<SearchPlan
					onSelectPlace={onSelectPlace}
					calcelModal={() => setModalHidden(false)}
				/>
			)}
			<footer></footer>
		</>
	);
};

export default Plan;
