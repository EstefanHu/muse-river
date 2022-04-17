import React from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { FaPencilAlt } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

import { useGlobalState } from '../../../lib/state';
import NavItem from '../../atoms/shared/NavItem';

const StyledLeftNav = styled.nav`
    position: fixed;
    // left: ${({ isShowing }) => isShowing ? '0' : '-210'}px;
    left: 0;
    top: 0px;
    bottom: 0;
    width: ${({ theme }) => theme.leftNavWidth}px;
    background-color: ${({ theme }) => theme.componentBackground};
    box-shadow: 1px 0 5px rgba(0, 0, 0, 0.25);
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    &>:not(:last-child) {
        margin-bottom: 5px;
    }
    &>:last-child {
        margin-top: auto;
        background-color: ${({ theme }) => theme.redPrimary};
        color: white;
    }
`;

const LINKS = [
    { href: '/home', icon: <MdOutlineSpaceDashboard />, label: 'home' },
    { href: '/write', icon: <FaPencilAlt />, label: 'write' },
    { href: '/profile', icon: <CgProfile />, label: 'profile' },
];

const LeftNav = () => {
    const { state: { auth: { user } } } = useGlobalState();

    return (
        <StyledLeftNav isShowing={!!user}>
            {LINKS.map((l) => (
                <NavItem
                    key={l.label}
                    href={l.href}
                >
                    {l.icon}
                    {l.label}
                </NavItem>
            ))}
            <NavItem
                href='/settings'
            >
                <IoSettingsOutline />
                settings
            </NavItem>
        </StyledLeftNav>
    )
};

export default LeftNav;
