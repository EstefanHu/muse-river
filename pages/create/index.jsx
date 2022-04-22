import { useEffect } from 'react';
import { useGlobalState } from '../../lib/state';

import CreateTemplate from '../../ui/templates/CreateTemplate';

const Create = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return <CreateTemplate />;
};

export default Create;
