import styled from 'styled-components';

import TemplateWrapper from '../atoms/layout/TemplateWrapper';
import Overlay from '../atoms/layout/Overlay';
import LandingHeader from '../organisms/landing/LandingHeader';

const StyledLandingTemplate = styled(TemplateWrapper)`
    display: flex;
    flex-direction: column;
`;

const LandingTemplate = ({ children }) => {

    return (
        <StyledLandingTemplate>
            <LandingHeader />
            {children}
            <Overlay />
        </StyledLandingTemplate>
    )
};

export default LandingTemplate;
