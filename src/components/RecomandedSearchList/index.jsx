import { showListStatusTypes } from '@/Constants';
import React, { useEffect, useRef } from 'react';
// <b> 수원역</b>
const RecomandedSearchItem = ({ item, onSelectItem }) => {
	const spanRef = useRef(null);
	useEffect(() => {
		spanRef.current.innerHTML = item.title;
	});
	return (
		<li className="query-item" onClick={onSelectItem}>
			<span ref={spanRef}></span>
			<ion-icon name="resize-outline"></ion-icon>
		</li>
	);
};

const RecomandedSearchList = ({
	searchInput,
	items,
	setSelectedItem,
	changeShowListStatus,
	setResultListChecked,
}) => {
	return (
		<section className={`query-container ${searchInput ? '' : 'display-none'}`}>
			<ul className="query-list">
				{items?.map((item) => (
					<RecomandedSearchItem
						key={item.title}
						item={item}
						onSelectItem={() => {
							setSelectedItem(item);
							changeShowListStatus(showListStatusTypes.RESULT);
							setResultListChecked((prev) => !prev);
						}}
					/>
				))}
			</ul>
		</section>
	);
};

export default RecomandedSearchList;
