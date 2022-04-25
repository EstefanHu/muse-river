import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '../../lib/state';

import CreateTemplate from '../../ui/templates/CreateTemplate';
import MainCreate from '../../ui/organisms/app/create/MainCreate';
import H1 from '../../ui/atoms/shared/h1';


const Create = () => {
    const { checkAuthState } = useGlobalState();
    const [postData, setPostData] = useState(null);
    const router = useRouter();
    const { type, step } = router.query;

    useEffect(checkAuthState, []);

    return (
        <CreateTemplate>
            <H1>{`${step} ${type}`}</H1>
            <MainCreate
                postData={postData}
                setPostData={setPostData}
            />
        </CreateTemplate>
    )
};

export default Create;
