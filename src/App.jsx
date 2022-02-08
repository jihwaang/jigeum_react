// import KakaoMap from '@kakaoMap/KakaoMap';
// import Header from '@/components/Header';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Plan from './pages/Plan';
import Room from './pages/Room';
import useInitAuthUser from '@/hooks/useInitAuthUser';

function App() {
	useInitAuthUser();
	return (
		<>
			<Route exact path="/" component={Home} />
			<Route exact path="/plan" component={Plan} />
			<Route exact path="/room/:roomId" component={Room} />
			<Switch>
				<Route path="/about/:name" component={About} />
				<Route path="/about" component={About} />
			</Switch>
		</>
	);
}

export default App;
