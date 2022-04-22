import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledSecondaryButton = styled.button`

`;

const SecondaryButton = ({ onClick, label, style }) => (
    <StyledSecondaryButton
        style={style}
        onClick={onClick}
    >
        {label}
    </StyledSecondaryButton>
);

SecondaryButton = ()