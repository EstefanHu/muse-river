import styled from 'styled-components';
import propTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';

const StyledCreateTextArea = styled(TextareaAutosize)`
    font-size: 1rem;
    width: 100%;
    margin-top: 5px;
    padding: 12px;
    border: 2px solid lightgrey;
    border-radius: 5px;
    outline: none;
    border: 2px solid rgba(247, 247, 247);
    background-color: rgba(247, 247, 247);
    border-radius: 8px;
    resize: none;
    transition: border-color 0.3s;
    &:hover { border-color: grey; }
    &:focus { border-color: ${({ theme }) => theme.redPrimary} }
`;

const CreateTextArea = ({ label, value, setValue }) => (
    <StyledCreateTextArea
        placeholder={`add ${label} here`}
        minRows={4}
        value={value}
        onChange={(e) => setValue(e.target.value)}
    />
);

CreateTextArea.prototype = {
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    setValue: propTypes.func.isRequired
};

export default CreateTextArea;
