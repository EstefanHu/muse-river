import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInputText = styled.input`
    font-size: 1rem;
    height: 35px;
    width: 100%;
    margin-top: 3px;
    padding: 0 8px;
    border: 2px solid lightgrey;
    border-radius: 5px;
    outline: none;
    transition: 0.3s;
    &:hover { border-color: grey; }
    &:focus { border-color: ${({ theme }) => theme.redPrimary} }
`;

const InputText = ({ type, value, setValue }) => (
    <StyledInputText
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
    />
);

InputText.propTypes = {
    /** Input type */
    type: PropTypes.oneOf([
        'text',
        'password',
        'email',
        'number',
        'tel',
        'url'
    ]).isRequired,
    /** Input value */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    /** Func to set value */
    setValue: PropTypes.func.isRequired
};

export default InputText;
