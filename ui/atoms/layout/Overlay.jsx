import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../../lib/state';

const StyledOverlay = styled.div`
    height: 100%;
    width: 100vw;
    z-index: 99;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    visibility: hidden;
    transition: background-color 0.3s;
    ${({ isShowing }) => isShowing && `
        background-color: rgba(0, 0, 0, 0.3);
        visibility: visible;
    `}
`;

const Overlay = () => {
    const { state: { auth: { isAuthing } },
        endAuthing
    } = useGlobalState();

    return (
        <StyledOverlay
            isShowing={isAuthing}
            onClick={endAuthing}
        />
    );
};

export default Overlay;
