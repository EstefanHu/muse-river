import { useEffect } from 'react';
import { useGlobalState } from '../../lib/state';

import AppTemplate from '../../ui/templates/AppTemplate';

const App = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return <AppTemplate />;
};

export default App;
