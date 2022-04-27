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

    return (
        <TemplateWrapper>
            <CreateHeader />
            {user ? (
                <StyledCreateTemplate>
                    {children}
                </StyledCreateTemplate>
            ) : <Loading />}
        </TemplateWrapper>
    )
};

export default CreateTemplate;
