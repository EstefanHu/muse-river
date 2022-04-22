import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.redPrimary};
    background-color: ${({ theme }) => theme.redPrimary};
    color: white;
    font-size: 1rem;
    font-weight: bold;
    height: 35px;
    padding: 0 15px;
    border-radius: 5px;
    transition: 0.35s;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: ${({ theme }) => theme.redPrimary};
    }
    ${({ style }) => style}
`;

const Button = ({ onClick, label = null, icon = null, style }) => (
    <StyledButton
        style={style}
        onClick={onClick}
    >
        {icon}
        {label}
    </StyledButton>
);

Button.propTypes = {
    /** styles for custom over riding */
    style: propTypes.object,
    /** Function to fire on button click */
    onClick: propTypes.func,
    /** Button text */
    label: propTypes.string.isRequired
}

export default Button;
