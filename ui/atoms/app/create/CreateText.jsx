import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledCreateText = styled.input`
    font-size: 1rem;
    height: 40px;
    width: 100%;
`;

const CreateText = ({ type, value, setValue }) => (
    <StyledCreateText
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
    />
);

CreateText.propTypes = {
    /** Input type */
    type: propTypes.string.isRequired,
    /** Input value */
    value: propTypes.oneOfType([
        propTypes.string,
        propTypes.number
    ]).isRequired,
    /** Func to set value */
    setValue: propTypes.func.isRequired
};

export default CreateText;
