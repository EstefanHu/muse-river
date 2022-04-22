import styled from 'styled-components';

import Label from '../../../atoms/shared/Label';
import CreateWidgetButtons from '../../../molecules/app/CreateWidgetButtons';

const StyledCreateWidget = styled.div`
    box-shadow: ${({ theme }) => theme.cardShadow};
    background-color: ${({ theme }) => theme.componentBackground};
    border-radius: ${({ theme }) => theme.componentBorderRadius};
    padding: 20px 30px 10px;
    margin-top: 25px;
`;

const CreateWidget = () => (
    <StyledCreateWidget>
        <Label text={'create post'} />
        <CreateWidgetButtons />
    </StyledCreateWidget>
);

export default CreateWidget;
