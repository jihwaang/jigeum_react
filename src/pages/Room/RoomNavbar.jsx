import React from 'react';

const RoomNavbar = ({ timer, toggleExitRoomModal }) => {
	return (
		<header className="room-header">
			<nav className="room-navigation">
				<div className="left-action" onClick={toggleExitRoomModal}>
					<ion-icon name="log-out-outline" class="btn-back"></ion-icon>
				</div>
				<div className="timer-wrapper danger">
					<span className="timer">{timer || '06:20'}</span>
				</div>
				<div className="right-action">
					<ion-icon
						name="information-circle-outline"
						class="btn-info"
					></ion-icon>
				</div>
			</nav>
		</header>
	);
};

export default RoomNavbar;
