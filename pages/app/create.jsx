import { useRouter } from 'next/router';

import CreateTemplate from '../../ui/templates/CreateTemplate';
import MainCreate from '../../ui/organisms/app/create/MainCreate';
import H1 from '../../ui/atoms/shared/H1';

const Create = () => {
    const router = useRouter();
    const { type, step } = router.query;

    return (
        <CreateTemplate>
            <H1>{`${step} ${type}`}</H1>
            <MainCreate />
        </CreateTemplate>
    );
};

export default Create;
