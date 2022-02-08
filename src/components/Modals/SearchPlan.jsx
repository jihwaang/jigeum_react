import { showListStatusTypes } from '@/Constants';
import { debounce } from '@/utils';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import { withNavermaps } from 'react-naver-maps/hocs';
import CustomNaverMap from '../CustomNaverMap';

import RecomandedSearchList from '../RecomandedSearchList';
import ResultSearchList from '../ResultSearchList';
import SDHeader from '../SecondDepthComponents/SDHeader';

const EnhancedMaps = withNavermaps(CustomNaverMap);

const fetchSearchData = async (searchInput) => {
	if (searchInput) {
		const res = await axios.get(
			`/v1/search/local.json?query=${searchInput}&display=5`,
			{
				headers: {
					'X-Naver-Client-Id': process.env.REACT_APP_X_Naver_Client_Id,
					'X-Naver-Client-Secret': process.env.REACT_APP_X_Naver_Client_Secret,
				},
			}
		);
		return res.data.items;
	}
	return [];
};
const SearchPlan = ({ calcelModal, onSelectPlace }) => {
	const [searchInput, setSearchInput] = useState('');

	// showListStatus = 'none' or 'showRecomandedList' or'showResultList'
	const [showListStatus, setShowListStatus] = useState(
		showListStatusTypes.NONE
	);
	const [resultList, setResultList] = useState([]);
	const [selectedItem, setSelectedItem] = useState(null);
	const [resultListChecked, setResultListChecked] = useState(false);

	const changeShowListStatus = (status) => {
		setShowListStatus(status);
	};
	const selectPlase = () => {
		onSelectPlace(selectedItem?.roadAddress);
		calcelModal();
	};

	const debouncedAsyncFetch = useRef(
		debounce(async (searchInput) => {
			try {
				setResultList(await fetchSearchData(searchInput));
			} catch (e) {
				console.info(e);
			}
		}, 300)
	);
	useEffect(() => {
		debouncedAsyncFetch.current(searchInput);
	}, [searchInput]);
	return (
		<>
			<SDHeader
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				changeShowListStatus={changeShowListStatus}
				calcelModal={calcelModal}
			></SDHeader>
			<main>
				<RenderAfterNavermapsLoaded
					ncpClientId={`${process.env.REACT_APP_NCP_CLIENT_ID}`}
					submodules={['geocoder']}
				>
					<EnhancedMaps
						resultList={resultList}
						selectedItem={selectedItem}
						selectPlase={selectPlase}
					/>
				</RenderAfterNavermapsLoaded>
				<div className={`current-location`}>
					<ion-icon name="locate-outline"></ion-icon>
				</div>
				{showListStatus === showListStatusTypes.RECOMANDED && (
					<RecomandedSearchList
						searchInput={searchInput}
						items={resultList}
						setSelectedItem={setSelectedItem}
						changeShowListStatus={changeShowListStatus}
						setResultListChecked={setResultListChecked}
					/>
				)}
				<ResultSearchList
					showListStatus={showListStatus}
					resultList={resultList}
					setSelectedItem={setSelectedItem}
					resultListChecked={resultListChecked}
					setResultListChecked={setResultListChecked}
				/>
			</main>

			<footer></footer>
		</>
	);
};

export default SearchPlan;
