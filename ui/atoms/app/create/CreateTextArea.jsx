import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledCreateTextArea = styled.textarea`
    font-size: 1rem;
    width: 100%;
    margin-top: 5px;
    padding: 12px;
    border: 2px solid lightgrey;
    border-radius: 5px;
    outline: none;
    transition: 0.3s;
    border: 2px solid rgba(247, 247, 247);
    background-color: rgba(247, 247, 247);
    border-radius: 8px;
    resize: none;
    &:hover { border-color: grey; }
    &:focus { border-color: ${({ theme }) => theme.redPrimary} }
`;

const CreateTextArea = ({ label, value, setValue }) => (
    <StyledCreateTextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
    >
    </StyledCreateTextArea>
);

CreateTextArea.prototype = {
    value: propTypes.string.isRequired,
    setValue: propTypes.func.isRequired
};

export default CreateTextArea;
