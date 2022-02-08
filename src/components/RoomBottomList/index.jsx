import React from 'react';
import statusOnline from '@/SVGFiles/images/status-online.svg';
import BottomListWrapper from '../@CommonComponents/BottomListWrapper';
import BottomListHeader from '../@CommonComponents/BottomListWrapper/BottomListHeader';

//내일할일

const RoomItem = ({ conectStatus, color, name, distance, lateStatus }) => {
	return (
		<div className="member-item">
			<div className={`profile-image profile-image-${color}`}>
				<img
					className={`profile-image-status profile-image-${color}`}
					src={conectStatus}
					alt="online"
				/>
				<ion-icon
					name="person-outline"
					class="profile-image-icon"
					color="light"
				></ion-icon>
			</div>
			<div className="member-name">
				<span>{name}</span>
			</div>
			<div className="member-location-info">
				<span>{distance}km</span>
			</div>
			<div className="member-status sticker-too-late">
				<span>{lateStatus}</span>
			</div>
		</div>
	);
};
const RoomBottomList = ({ checked, setChecked, list }) => {
	return (
		<BottomListWrapper>
			<BottomListHeader
				leftStates={{
					setChecked,
					checked,
				}}
				titleStates={{ title: '약속 참여자', numberOfList: 4 }}
				rightComponent={
					<span onClick={() => alert('채팅방 리다이렉트')}>
						<ion-icon name="chatbox-outline" class="chatbox-outline"></ion-icon>
					</span>
				}
			/>

			<div className="result-list-wrapper">
				<div className="member-item">
					<div className="profile-image profile-image-blue">
						<img
							className="profile-image-status profile-image-blue"
							src={statusOnline}
							alt="online"
						/>
						<ion-icon
							name="person-outline"
							class="profile-image-icon"
							color="light"
						></ion-icon>
					</div>
					<div className="member-name">
						<span>최두원</span>
					</div>
					<div className="member-location-info">
						<span>5km</span>
					</div>
					<div className="member-status sticker-too-late">
						<span>지각 확정</span>
					</div>
				</div>
				<div className="member-item">
					<div className="profile-image profile-image-red">
						<img
							className="profile-image-status profile-image-red"
							src="/images/status-online.svg"
							alt="online"
						/>
						<ion-icon
							name="person-outline"
							class="profile-image-icon"
							color="light"
						></ion-icon>
					</div>
					<div className="member-name">
						<span>이신호</span>
					</div>
					<div className="member-location-info">
						<span>10m</span>
					</div>
					<div className="member-status sticker-arrive">
						<span>도착</span>
					</div>
				</div>
				<div className="member-item">
					<div className="profile-image profile-image-yellow">
						<img
							className="profile-image-status profile-image-yellow"
							src="/images/status-background.svg"
							alt="background"
						/>
						<ion-icon
							name="person-outline"
							class="profile-image-icon"
							color="light"
						></ion-icon>
					</div>
					<div className="member-name">
						<span>김지황</span>
					</div>
					<div className="member-location-info">
						<span>5m</span>
					</div>
					<div className="member-status sticker-arrive">
						<span>도착</span>
					</div>
				</div>
				<div className="member-item">
					<div className="profile-image profile-image-green">
						<img
							className="profile-image-status profile-image-green"
							src="/images/status-disconnected.svg"
							alt="disconnected"
						/>
						<ion-icon
							name="person-outline"
							class="profile-image-icon"
							color="light"
						></ion-icon>
					</div>
					<div className="member-name">
						<span>김수현</span>
					</div>
					<div className="member-location-info">
						<span>300m</span>
					</div>
					<div className="member-status sticker-late">
						<span>지각 예정</span>
					</div>
				</div>
			</div>
		</BottomListWrapper>
	);
};

export default RoomBottomList;
