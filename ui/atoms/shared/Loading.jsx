import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.backgroundColor};
`;

const Loading = () => (
    <StyledLoading>
        <h1>loading</h1>
    </StyledLoading>
);

export default Loading;
