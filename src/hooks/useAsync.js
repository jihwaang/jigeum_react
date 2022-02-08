import { useReducer, useEffect } from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'LOADING':
			return {
				loading: true,
				data: null,
				error: null,
			};
		case 'SUCCESS':
			console.log('suc', action);
			return {
				loading: false,
				data: action.data,
				error: null,
			};
		case 'ERROR':
			console.log('error', action);
			return {
				loading: false,
				data: null,
				error: action.error,
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

function useAsync(callback, deps = [], args, callAtstart = true) {
	const [state, dispatch] = useReducer(reducer, {
		loading: false,
		data: null,
		error: false,
	});

	const fetchData = async () => {
		dispatch({ type: 'LOADING' });
		try {
			const data = await callback(args);
			console.log({ data });
			dispatch({ type: 'SUCCESS', data });
		} catch (e) {
			dispatch({ type: 'ERROR', error: e });
		} finally {
			return await new Promise((res, rej) => {
				setTimeout(() => {
					res(null);
				}, 500);
			});
		}
	};

	useEffect(() => {
		callAtstart ?? fetchData();
		// eslint 설정을 다음 줄에서만 비활성화
		// eslint-disable-next-line
	}, deps);

	return [state, fetchData];
}

export default useAsync;
