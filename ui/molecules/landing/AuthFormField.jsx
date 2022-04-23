import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Label from '../../atoms/shared/Label';
import AuthText from '../../atoms/landing/AuthText'
import AuthTextarea from '../../atoms/landing/AuthTextarea';

const StyledAuthFormField = styled.span`
    margin-bottom: 10px;
`;

const AuthFormField = ({ label, type, value, setValue }) => {
    const renderInput = (type) => {
        switch (type) {
            case 'text':
            case 'password':
            case 'email':
            case 'number':
            case 'tel':
            case 'url':
                return <AuthText
                    type={type}
                    value={value}
                    setValue={setValue}
                />;

            case 'textarea':
                return <AuthTextarea
                    value={value}
                    setValue={setValue}
                />;

            default:
                return;
        };
    };

    return (
        <StyledAuthFormField>
            <Label text={label} />
            {renderInput(type)}
        </StyledAuthFormField>
    );
};

AuthFormField.propTypes = {
    /** Label text display */
    label: propTypes.string.isRequired,
    /** Type of input */
    type: propTypes.string.isRequired,
    /** Value of input */
    value: propTypes.string.isRequired,
    /** Func for setting value of input */
    setValue: propTypes.func.isRequired
};

export default AuthFormField;
