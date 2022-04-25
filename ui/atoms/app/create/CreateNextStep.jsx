import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledCreateNextStep = styled.button`
    background-color: ${({ theme }) => theme.redPrimary};
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.redPrimary};
    border-radius: 3px;
    height: 35px;
    transition: 0.25s;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: ${({ theme }) => theme.redPrimary};
    }
`;

const CreateNextStep = ({ text }) => {
    const router = useRouter();

    return (
        <StyledCreateNextStep
            onClick={() => null}
        >
            {text}
        </StyledCreateNextStep>
    )
};

export default CreateNextStep;
