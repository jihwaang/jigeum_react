import { showListStatusTypes } from '@/Constants';
import React, { useEffect, useRef } from 'react';
import BottomListWrapper from '../@CommonComponents/BottomListWrapper';
import BottomListHeader from '../@CommonComponents/BottomListWrapper/BottomListHeader';

const ResultSearchItem = ({ item, setSelectedItem }) => {
	const textRef = useRef(null);
	useEffect(() => {
		textRef.current.innerHTML = item.title;
	});

	return (
		<li
			className="result-item"
			onClick={() => {
				setSelectedItem(item);
			}}
		>
			<div className="region-info">
				<h4 ref={textRef}>''</h4>
				<p>{item.roadAddress}</p>
			</div>
			<ion-icon name="location-outline"></ion-icon>
		</li>
	);
};

const ResultSearchList = ({
	showListStatus,
	resultList,
	setSelectedItem,
	resultListChecked,
	setResultListChecked,
}) => {
	return (
		<BottomListWrapper isHidden={showListStatus !== showListStatusTypes.RESULT}>
			<BottomListHeader
				leftStates={{
					checked: resultListChecked,
					setChecked: setResultListChecked,
				}}
				titleStates={{
					title: '검색 결과',
					numberOfList: resultList?.length ?? 0,
				}}
			/>

			<div className="result-list-wrapper">
				<ul className="result-list">
					{resultList?.map((item) => (
						<ResultSearchItem
							item={item}
							key={item.title}
							setSelectedItem={(item) => {
								setSelectedItem(item);
								setResultListChecked((prev) => !prev);
							}}
						/>
					))}
				</ul>
			</div>
		</BottomListWrapper>
	);
};

export default ResultSearchList;
