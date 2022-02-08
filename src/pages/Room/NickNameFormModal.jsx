import React from 'react';
import ModalContainer from './ModalContainer';

const NickNameFormModalComponent = ({ toggleModal }) => {
	return (
		<div className="popup nickname">
			<div className="content">
				<span className="popup-title">닉네임을 입력해주세요.</span>
				<input
					type="text"
					className="input-text"
					name="username"
					id="username"
				/>
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
const NickNameFormModal = ({ showModal, toggleModal }) => {
	return (
		<ModalContainer showModal={showModal}>
			<NickNameFormModalComponent toggleModal={toggleModal} />
		</ModalContainer>
	);
};

export default NickNameFormModal;
