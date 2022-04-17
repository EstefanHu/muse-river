import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useGlobalState } from '../../lib/state';

import Loading from '../../atoms/shared/Loading';
import TemplateWrapper from '../../atoms/layout/TemplateWrapper';
import AppHeader from '../organisms/app/AppHeader';
import AppNav from '../organisms/app/AppNav';

const StyledAppTemplate = styled.div`
    width: 700px;
`;

const AppTemplate = ({ children }) => {
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
            <AppHeader />
            <AppNav />
            <StyledAppTemplate>
                {children}
            </StyledAppTemplate>
        </TemplateWrapper>
    )
};

export default AppTemplate;
