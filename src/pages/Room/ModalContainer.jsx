import React from 'react';

const ModalContainer = ({ showModal, children }) => {
	return (
		<div className={`overlay transparent ${showModal ? '' : 'display-none'}`}>
			{children}
		</div>
	);
};

export default ModalContainer;
