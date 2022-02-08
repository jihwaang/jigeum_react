import { useEffect } from 'react';
import { getUser } from '@/apis';
import { useUserDispatch } from '@/contextApis/authContext';

const useInitAuthUser = () => {
	const userDispatch = useUserDispatch();
	useEffect(() => {
		getUser(userDispatch);
	}, [userDispatch]);

	return null;
};

export default useInitAuthUser;
