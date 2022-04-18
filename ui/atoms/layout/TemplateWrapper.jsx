import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useGlobalState } from '../../../lib/state';

const StyledWrapper = styled.main`
    padding-top: 70px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    transition: 0.3s;
    background-color: ${({ theme }) => theme.backgroundColor};
    // padding-left: ${({ isCompressed, theme }) => isCompressed ? theme.leftNavWidth : 0}px;
`;

const Wrapper = ({ children }) => {
    const { state: { auth: { user } } } = useGlobalState();

    return <StyledWrapper isCompressed={!!user}>{children}</StyledWrapper>;
};

Wrapper.propTypes = {
    // Elements inside Wrapper
    children: propTypes.node.isRequired
};

export default Wrapper;
