import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledCreateText = styled.input`
    margin-top: 5px;
    font-size: 1rem;
    height: 40px;
    width: 100%;
    border: 2px solid rgba(247, 247, 247);
    background-color: rgba(247, 247, 247);
    border-radius: 8px;
    padding: 0px 12px;
    transition: 0.2s;
    outline: 0;
    &:hover { border-color: grey; }
    &:focus { border-color: ${({ theme }) => theme.redPrimary};}
`;

const CreateText = ({ label, type, value, setValue }) => (
    <StyledCreateText
        placeholder={`Add ${label}`}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
    />
);

CreateText.propTypes = {
    /** Input type */
    type: propTypes.string.isRequired,
    /** Input value */
    value: propTypes.string.isRequired,
    /** Func to set value */
    setValue: propTypes.func.isRequired
};

export default CreateText;
