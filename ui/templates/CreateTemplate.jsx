import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useGlobalState } from '../../lib/state';

import Loading from '../atoms/shared/Loading';
import TemplateWrapper from '../atoms/layout/TemplateWrapper';
import CreateHeader from '../organisms/app/create/CreateHeader';

const StyledCreateTemplate = styled.div`
    width: 800px;
`;

const CreateTemplate = ({ children }) => {
    const { state: { auth: { user } } } = useGlobalState();
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setIsLoading(true)
        // if (!user) router.push('/');
        setIsLoading(false);
    }, [user, router]);

    if (isLoading) return <Loading />;

    return (
        <TemplateWrapper>
            <CreateHeader />
            <StyledCreateTemplate>
                {children}
            </StyledCreateTemplate>
        </TemplateWrapper>
    )
};

export default CreateTemplate;
