import { useEffect } from 'react';
import { useGlobalState } from '../../lib/state';

import AppTemplate from '../../ui/templates/AppTemplate';
import CreateWidget from '../../ui/organisms/app/write/CreateWidget';

const Write = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return (
        <AppTemplate>
            <CreateWidget />
            <h1>hello</h1>
        </AppTemplate>
    )
};

export default Write;
