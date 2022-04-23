import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '../../lib/state';

import CreateTemplate from '../../ui/templates/CreateTemplate';
import CreateForm from '../../ui/organisms/create/CreateForm';
import H1 from '../../ui/atoms/shared/H1';

const Create = () => {
    const { checkAuthState } = useGlobalState();
    const router = useRouter();

    useEffect(checkAuthState, []);

    return (
        <CreateTemplate>
            <H1>create {router.query.type}</H1>
            <CreateForm />
        </CreateTemplate>
    )
};

export default Create;
