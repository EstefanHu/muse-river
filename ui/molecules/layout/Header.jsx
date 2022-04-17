import React from 'react';
import styled from 'styled-components';

import Logo from '../../atoms/shared/Logo';

const StyledHeader = styled.header`
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    right: 0;
    height: 65px;
    width: 100vw;
    padding: 0 40px;
    background-color: white;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.componentBackground};
`;

const Header = ({ children }) => (
    <StyledHeader>
        <Logo />
        {children}
    </StyledHeader>
);

export default Header;
