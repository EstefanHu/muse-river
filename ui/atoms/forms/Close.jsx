import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledClose = styled.p`
    position: absolute;
    top: 10px;
    right: 20px;
    width: fit-content;
    font-size: 1.5rem;
    font-weight: bold;
    color: lightgrey;
    cursor: pointer;
    transition: 0.2s;
    &:hover { color: ${({ theme }) => theme.redPrimary} }
`;

const Close = ({ close }) => <StyledClose onClick={close}>&times;</StyledClose>;

Close.propTypes = {
    /** Method to fire on close */
    close: PropTypes.func.isRequired
};

export default Close;
