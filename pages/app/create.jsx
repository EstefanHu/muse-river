import { useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '../../lib/state';

import CreateTemplate from '../../ui/templates/CreateTemplate';
import PostCreator from '../../ui/organisms/app/create/PostCreator';
import H1 from '../../ui/atoms/shared/h1';

const newPostContext = createContext();

const Create = () => {
    const { checkAuthState } = useGlobalState();
    const router = useRouter();
    const { type, step } = router.query;

    useEffect(checkAuthState, []);

    const renderStep = (step) => {
        switch (step) {
            case 'create':
                return <PostCreator />;
            default:
                return;
        }
    }

    return (
        <newPostContext.Provider value={{}}>
            <CreateTemplate>
                <H1>{`${step} ${type}`}</H1>
                {renderStep(step)}
            </CreateTemplate>
        </newPostContext.Provider>
    )
};

export default Create;
