import styled from 'styled-components';

const StyledTitle = styled.h1`

`;

const Title = ({ id, text }) => {
    return (
        <StyledTitle id={id}>
            {text}
        </StyledTitle>
    )
};

export default Title;
