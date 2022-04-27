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

    if (!user) return <Loading />;

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
