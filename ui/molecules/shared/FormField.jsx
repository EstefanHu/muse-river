import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Label from '../../atoms/shared/Label';
import InputText from '../../atoms/forms/InputText'
import InputTextarea from '../../atoms/forms/InputTextarea';

const StyledFormField = styled.span`
    margin-bottom: 10px;
`;

const FormField = ({ label, type, value, setValue }) => {
    const renderInput = (type) => {
        switch (type) {
            case 'text':
            case 'password':
            case 'email':
            case 'number':
            case 'tel':
            case 'url':
                return <InputText
                    type={type}
                    value={value}
                    setValue={setValue}
                />;

            case 'textarea':
                return <InputTextarea
                    value={value}
                    setValue={setValue}
                />;

            default:
                return;
        };
    };

    return (
        <StyledFormField>
            <Label text={label} />
            {renderInput(type)}
        </StyledFormField>
    );
};

FormField.propTypes = {
    /** Label text display */
    label: propTypes.string.isRequired,
    /** Type of input */
    type: propTypes.string.isRequired,
    /** Value of input */
    value: propTypes.string.isRequired,
    /** Func for setting value of input */
    setValue: propTypes.func.isRequired
};

export default FormField;
