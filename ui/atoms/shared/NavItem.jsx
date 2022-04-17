import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledNavItem = styled.a`
    height: 60px;
    padding: 0 30px;
    color: ${({ isSelected, theme }) => isSelected ? theme.redPrimary : theme.textColor};
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    transition: 0.3s;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: rgb(240, 240, 240);
    }
    svg {
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }
`;

const NavItem = ({ href, children }) => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <Link href={href} passHref>
            <StyledNavItem isSelected={pathname.includes(children[1])}>
                {children}
            </StyledNavItem>
        </Link>
    )
};

NavItem.propTypes = {
    /** href to internal page */
    href: propTypes.string.isRequired,
    /** React elements inside of nav item */
    children: propTypes.node.isRequired
};

export default NavItem;
