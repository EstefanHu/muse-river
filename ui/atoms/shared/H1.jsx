import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledH1 = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 10px;

    span {
        color: ${({theme}) => theme.redPrimary};
    }
`;

const H1 = ({ children }) => <StyledH1>{children}</StyledH1>;

H1.propTypes = {
    /** Text to display */
    children: propTypes.string.isRequired
};

export default H1;
