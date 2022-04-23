import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledAuthText = styled.input`
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

const AuthText = ({ type, value, setValue }) => (
    <StyledAuthText
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
    />
);

AuthText.propTypes = {
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

export default AuthText;
