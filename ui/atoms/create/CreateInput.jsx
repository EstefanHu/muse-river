import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledCreateInput = styled.input`
    font-size: 1rem;
    height: 40px;
    width: 100%;
`;

const CreateInput = ({ type, value, setValue }) => (
    <StyledCreateInput
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
    />
);

InputText.propTypes = {
    /** Input type */
    type: propTypes.oneOf([
        'text',
        'password',
        'email',
        'number',
        'tel',
        'url'
    ]).isRequired,
    /** Input value */
    value: propTypes.oneOfType([
        propTypes.string,
        propTypes.number
    ]).isRequired,
    /** Func to set value */
    setValue: propTypes.func.isRequired
};

export default CreateInput;
