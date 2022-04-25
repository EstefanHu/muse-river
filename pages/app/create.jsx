import { useEffect } from 'react';
import { useRouter } from 'next/router';

import CreateTemplate from '../../ui/templates/CreateTemplate';
import MainCreate from '../../ui/organisms/app/create/MainCreate';
import H1 from '../../ui/atoms/shared/H1';
import Loading from '../../ui/atoms/shared/Loading';

const Create = () => {
    const router = useRouter();
    const { type, step } = router.query;
    const rerouting = (!type || !step);

    // useEffect(() => {
    //     if (rerouting) router.push('/app/write');
    // }, [rerouting, router]);

    // if (rerouting) return <Loading />;

    return (
        <CreateTemplate>
            <H1>{`${step} ${type}`}</H1>
            <MainCreate />
        </CreateTemplate>
    );
};

export default Create;
