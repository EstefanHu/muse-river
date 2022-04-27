import styled from 'styled-components';
import { useGlobalState } from '../../lib/state';

import Loading from '../atoms/shared/Loading';
import TemplateWrapper from '../atoms/layout/TemplateWrapper';
import AppHeader from '../organisms/app/AppHeader';
import AppNav from '../organisms/app/AppNav';

const StyledAppTemplate = styled.div`
    width: 700px;
`;

const AppTemplate = ({ children }) => {
    const { state: { auth: { user } } } = useGlobalState();

    return (
        <TemplateWrapper>
            {user ? (
                <>
                    <AppHeader />
                    <AppNav />
                    <StyledAppTemplate>
                        {children}
                    </StyledAppTemplate>
                </>
            ) : <Loading />}
        </TemplateWrapper>
    )
};

export default AppTemplate;
