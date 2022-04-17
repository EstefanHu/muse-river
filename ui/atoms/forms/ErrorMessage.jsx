import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledErrorMessage = styled.p`
    font-weight: bold;
    color: red;
    font-size: 0.9rem;
    text-align: center;
    height: 12px;
`;

const ErrorMessage = ({ children }) => <StyledErrorMessage>{children}</StyledErrorMessage>;

ErrorMessage.propTypes = {
    /** Text output for error message */
    children: propTypes.string
};

export default ErrorMessage;
