import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useGlobalState } from '../../../lib/state';

import FormField from '../../molecules/landing/AuthFormField';
import H1 from '../../atoms/shared/H1';
import Submit from '../../atoms/landing/Submit';
import Note from '../../atoms/shared/Note';
import ErrorMessage from '../../atoms/landing/AuthErrorMessage';

const StyledSignIn = styled.form`
    display: flex;
    flex-direction: column;
`;

const SignIn = ({ setHasAccount }) => {
    const {
        state: { auth: { authErrorMessage } },
        signIn,
        endAuthing
    } = useGlobalState()
    const [state, setState] = useState({ email: '', password: '' });

    const handleSignIn = async (e) => {
        e.preventDefault();
        await signIn(state, endAuthing);
    };

    return (
        <StyledSignIn onSubmit={handleSignIn}>
            <H1>Sign in</H1>
            <ErrorMessage>{authErrorMessage}</ErrorMessage>

            {FIELDS.map((f) => {
                const { key, label, type } = f;

                return (
                    <FormField
                        key={key}
                        label={label}
                        type={type}
                        value={state[key]}
                        setValue={(value) => {
                            const newState = state;
                            newState[key] = value;
                            setState({ ...newState });
                        }}
                    />
                )
            })}

            <Submit
                label='SIGN IN'
                style={{ height: '40px', margin: '15px 0px' }}
            />

            <Note>
                Don&#39;t have an account?
                <button
                    type="button"
                    onClick={() => setHasAccount(false)}
                >sign up</button>
            </Note>
        </StyledSignIn>
    );
};

SignIn.propTypes = {
    /** Func to toggle to register */
    setHasAccount: propTypes.func.isRequired
};

const FIELDS = [
    {
        key: 'email',
        label: 'email address',
        type: 'email',
    },
    {
        key: 'password',
        label: 'password',
        type: 'password'
    }
]

export default SignIn;
