import styled from 'styled-components';

const StyledSectionHeader = styled.h2``;

const SectionHeader = ({ id, text }) => {
    return (
        <StyledSectionHeader id={id}>
            {text}
        </StyledSectionHeader>
    )
};

export default SectionHeader;
