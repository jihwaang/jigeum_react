import { showListStatusTypes } from '@/Constants';
import React from 'react';

// 아 별로 안좋은 모양인데...
const SDHeader = ({
	searchInput,
	setSearchInput,
	changeShowListStatus,
	calcelModal,
}) => {
	const onKeyUp = (e) => {
		if (e.keyCode === 13) {
			changeShowListStatus(showListStatusTypes.RESULT);
			e.target.blur();
		}
	};
	const openRecomendedSearchList = () => {
		changeShowListStatus(showListStatusTypes.RECOMANDED);
	};

	return (
		<header>
			<nav className="navigation">
				<ion-icon name="close-outline" onClick={calcelModal}></ion-icon>
				<h3>약속 장소</h3>
				<span></span>
			</nav>
			<section className="search-container">
				<ion-icon name="search-outline" class="search-icon"></ion-icon>
				<input
					onChange={(e) => setSearchInput(e.target.value)}
					onKeyUp={onKeyUp}
					onFocus={openRecomendedSearchList}
					type="text"
					name="place"
					id="place"
					className="input-text input-search"
					placeholder="약속 장소를 검색해주세요"
					value={searchInput}
				/>
				<span
					className={`search-cancel-icon  ${
						!searchInput ? 'display-none' : ''
					}`}
				>
					<ion-icon name="close-circle-outline"></ion-icon>
				</span>
			</section>
		</header>
	);
};

export default SDHeader;
