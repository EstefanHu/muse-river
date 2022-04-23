import styled from 'styled-components';
import propTypes from 'prop-types';
import { useGlobalState } from '../../../../lib/state';

const StyledCreateForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.componentBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.componentBorderRadius};
    padding: 20px 30px;
    margin-top: 25px;   
`;

const CreateForm = ({ children }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting');
    };

    return (
        <StyledCreateForm onSubmit={handleSubmit}>
            {children}
        </StyledCreateForm>
    )
};

export default CreateForm;
