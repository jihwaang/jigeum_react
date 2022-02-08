import React from 'react';
import Menu from '@/SVGFiles/Menu';
import MoreHorizontal from '@/SVGFiles/MoreHorizontal';

import '@/components/Header/style.css';

const index = () => {
	return (
		<section className="header">
			<header className="nav-bar">
				<div className="responsive-wrapper">
					<div className="header-leftAction">
						<Menu />
					</div>
					<div className="header-title">
						<div className="header-title-textbox">Service Logo</div>
					</div>
					<div className="header-rightAction">
						<MoreHorizontal />
					</div>
				</div>
			</header>
		</section>
	);
};

export default index;
