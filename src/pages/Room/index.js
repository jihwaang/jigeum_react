import React, { useCallback, useEffect, useState } from 'react';

import './style.css';
import RoomNavbar from './RoomNavbar';
import NickNameFormModal from './NickNameFormModal';
import ExitRoomModal from './ExitRoomModal';
import CustomNaverMap from '@/components/CustomNaverMap';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import RoomBottomList from '@/components/RoomBottomList';
import { useRouteMatch } from 'react-router';
import { withNavermaps } from 'react-naver-maps/dist/hocs-018c38ad';

const EnhancedMaps = withNavermaps(CustomNaverMap);

const Room = () => {
	// roomUsersByRoomId, roomId 정보가필요함
	const match = useRouteMatch();

	const [showNickNameFormModal, setNickNameFormShowModal] = useState(true);
	const toggleNickNameFormModal = useCallback(() => {
		setNickNameFormShowModal((p) => !p);
	}, []);
	//중복코드...시러
	const [showExitRoomModal, setshowExitRoomModal] = useState(false);
	const toggleExitRoomModal = useCallback(() => {
		setshowExitRoomModal((p) => !p);
	}, []);

	const [isCheckedRoomUserList, setIsCheckedRoomUserList] = useState(false);
	useEffect(() => {
		console.log({ match });
	}, []);
	return (
		<>
			<RoomNavbar timer={'06:21'} toggleExitRoomModal={toggleExitRoomModal} />
			<main>
				<RenderAfterNavermapsLoaded
					ncpClientId={`${process.env.REACT_APP_NCP_CLIENT_ID}`}
					submodules={['geocoder']}
				>
					<EnhancedMaps />
					``
				</RenderAfterNavermapsLoaded>{' '}
				<RoomBottomList
					checked={isCheckedRoomUserList}
					setChecked={(flag) => {
						setIsCheckedRoomUserList(flag);
					}}
					list={[]}
				/>
				<NickNameFormModal
					showModal={showNickNameFormModal}
					toggleModal={toggleNickNameFormModal}
				/>
				<ExitRoomModal
					showModal={showExitRoomModal}
					toggleModal={toggleExitRoomModal}
				/>
			</main>
			<footer></footer>
		</>
	);
};
export default Room;
