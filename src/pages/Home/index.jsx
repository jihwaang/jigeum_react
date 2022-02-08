import React from 'react';
import { useHistory } from 'react-router';

const Home = () => {
	const history = useHistory();

	const onClickToPlanPage = () => {
		history.push('/plan');
	};

	return (
		<>
			<header>
				<nav className="navigation">
					<ion-icon name="menu-outline"></ion-icon>
					<h3>Service Logo</h3>
					<ion-icon name="ellipsis-horizontal-outline"></ion-icon>
				</nav>
			</header>
			<main>
				<section className="container">
					<div className="content">
						<p>약속을 만드세요.</p>
						<p>만날 약속장소와 시간을 정하고,</p>
						<p>실시간으로 참여자의 위치를 파악하세요.</p>
						<p>게으름뱅이와 거짓말쟁이를 찾아내 처단하세요.</p>
						<p>여러분의 시간은 소중합니다.</p>
					</div>
					<button
						type="button"
						className="button-container"
						onClick={onClickToPlanPage}
					>
						<ion-icon name="create-outline"></ion-icon>
						<span>약속만들기</span>
					</button>
				</section>
			</main>
			<footer></footer>
		</>
	);
};

export default Home;
