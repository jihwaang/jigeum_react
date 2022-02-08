const BottomListWrapper = ({ isHidden, children }) => {
	return (
		<section
			className={`search-result-container ${isHidden ? 'display-none' : ''}`}
		>
			{children}
		</section>
	);
};
export default BottomListWrapper;
