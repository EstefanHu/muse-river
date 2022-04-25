import styled from 'styled-components';

const StyledParagraph = styled.p`

`;

const Paragraph = ({ id, text }) => {

    return (
        <StyledParagraph id={id}>
            {text}
        </StyledParagraph>
    )
};

export default Paragraph;
