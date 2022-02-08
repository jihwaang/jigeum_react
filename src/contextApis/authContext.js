import { createContext, useContext, useReducer } from 'react';

const initialState = {
	user: {
		loading: false,
		data: null,
		error: null,
	},
};
// 로딩중일 때 바뀔 상태 객체
const loadingState = {
	loading: true,
	data: null,
	error: null,
};

// 성공했을 때의 상태 만들어주는 함수
const success = (data) => ({
	loading: false,
	data,
	error: null,
});

// 실패했을 때의 상태 만들어주는 함수
const error = (error) => ({
	loading: false,
	data: null,
	error: error,
});
// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
function usersReducer(state, action) {
	switch (action.type) {
		case 'GET_USER':
			return {
				...state,
				user: loadingState,
			};
		case 'GET_USER_SUCCESS':
			return {
				...state,
				user: success(action.data),
			};
		case 'GET_USER_ERROR':
			return {
				...state,
				user: error(action.error),
			};
		default:
			throw new Error(`Unhanded action type: ${action.type}`);
	}
}

const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
export function UserProvider({ children }) {
	const [state, dispatch] = useReducer(usersReducer, initialState);
	return (
		<UserStateContext.Provider value={state}>
			<UserDispatchContext.Provider value={dispatch}>
				{children}
			</UserDispatchContext.Provider>
		</UserStateContext.Provider>
	);
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useUserState() {
	const state = useContext(UserStateContext);
	if (!state) {
		throw new Error('Cannot find UsersProvider');
	}
	return state;
}
export function useUserDispatch() {
	const dispatch = useContext(UserDispatchContext);
	if (!dispatch) {
		throw new Error('Cannot find UsersProvider');
	}
	return dispatch;
}
