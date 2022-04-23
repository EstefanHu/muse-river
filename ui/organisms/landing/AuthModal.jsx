import React, { useState, useEffect } from 'react';
import { useGlobalState } from '../../../lib/state';
import styled from 'styled-components';

import Close from '../../atoms/shared/Close';
import SignIn from './SignIn';
import Register from './Register';

const StyledAuthModal = styled.div`
    position: fixed;
    top: 100%;
    left: 50%;
    margin-left: -250px;
    z-index: 100;
    width: 500px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 10px;
    padding: 30px 40px;
    background-color: white;
    outline: none;
    transition: 0.3s;
    ${({ isAuthing }) => isAuthing && `
        top: 50%;
        transform: translateY(-50%);
    `}
`;

const AuthModal = () => {
    const {
        state: { auth: { isAuthing } },
        endAuthing,
        clearAuthErrorMessage,
    } = useGlobalState();
    const [hasAccount, setHasAccount] = useState(true);

    useEffect(clearAuthErrorMessage, [hasAccount])

    return (
        <StyledAuthModal
            tabIndex={isAuthing ? 1 : -1}
            isAuthing={isAuthing}
        >
            <Close close={endAuthing} />
            {hasAccount
                ? <SignIn setHasAccount={setHasAccount} />
                : <Register setHasAccount={setHasAccount} />
            }
        </StyledAuthModal>
    );
};

export default AuthModal;
