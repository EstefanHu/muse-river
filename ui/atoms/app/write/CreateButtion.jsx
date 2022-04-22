import styled from 'styled-components';

const StyledCreateButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    height: 40px;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textColorSecondary};
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.componentBackground};
    transition: 0.25s;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.backgroundColorHover};
    }
    svg {
        margin-right: 10px;
        height: 20px;
        width: 20px;
    }
`;

const CreateButton = ({ onClick, icon, label }) => (
    <StyledCreateButton onClick={onClick}>
        {icon}
        {label}
    </StyledCreateButton>
);

export default CreateButton; 
