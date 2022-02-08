import React from 'react';
import ModalContainer from './ModalContainer';

const ExitRoomModalComponent = ({ toggleModal }) => {
	return (
		<div className="popup exit">
			<div className="content">
				<span className="popup-title">약속을 나가시겠습니까?</span>
			</div>
			<div className="btn-group">
				<button className="cancel" onClick={toggleModal}>
					취소
				</button>
				<button className="enter" onClick={toggleModal}>
					확인
				</button>
			</div>
		</div>
	);
};

const ExitRoomModal = ({ showModal, toggleModal }) => {
	return (
		<ModalContainer showModal={showModal}>
			<ExitRoomModalComponent toggleModal={toggleModal} />
		</ModalContainer>
	);
};

export default ExitRoomModal;
