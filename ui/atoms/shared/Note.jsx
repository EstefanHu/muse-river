import React from 'react';
import styled from 'styled-components';

const StyledNote = styled.p`
    text-align: center;
    font-size: 1rem;
    button {
        margin-left: 8px;
        font-size: 1rem;
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.redPrimary};
        font-weight: bold;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Note = ({ children }) => <StyledNote>{children}</StyledNote>;

export default Note;
