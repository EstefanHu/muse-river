import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledAuthTextarea = styled.textarea`
    font-size: 1rem;
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

const AuthTextarea = ({ value, setValue }) => (
    <StyledAuthTextarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
    >
        add text here
    </StyledAuthTextarea>
);

AuthTextarea.prototype = {
    value: propTypes.string.isRequired,
    setValue: propTypes.func.isRequired
};

export default AuthTextarea;
