import styled from 'styled-components';
import propTypes from 'prop-types';

import Label from '../../../atoms/shared/Label';
import CreateText from '../../../atoms/app/create/CreateText';
import CreateTextArea from '../../../atoms/app/create/CreateTextArea';

const StyledCreateFormField = styled.span`
    margin-bottom: 10px;
`;

const CreateFormField = ({ label, type, value, setValue }) => {
    const renderInput = (type) => {
        switch (type) {
            case 'text':
                return <CreateText
                    label={label}
                    type={type}
                    value={value}
                    setValue={setValue}
                />;
            case 'textarea':
                return <CreateTextArea
                    label={label}
                    value={value}
                    setValue={setValue}
                />;
        };
    };

    return (
        <StyledCreateFormField>
            <Label text={label} />
            {renderInput(type)}
        </StyledCreateFormField>
    );
};

CreateFormField.propTypes = {
    label: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    setValue: propTypes.func.isRequired
};

export default CreateFormField;
