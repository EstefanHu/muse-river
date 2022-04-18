import React from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '../../../lib/state';
import styled from 'styled-components';

import Href from '../../atoms/shared/Href';
import Button from '../../atoms/shared/Button';
import ProfileImage from '../../atoms/shared/ProfileImage';

const StyledLandingLinks = styled.span`
    display:flex;
    align-items: center;
    width: 370px;
    &>:last-child {
        margin-left: auto;
    }
`;

const LandingLinks = () => {
    const {
        state: { auth: { user } },
        startAuthing
    } = useGlobalState();
    const router = useRouter();

    return (
        <StyledLandingLinks>
            {
                chooseHref(router.pathname)
                    .map((l) => (
                        <Href
                            key={l.label}
                            url={l.url}
                            label={l.label}
                        />
                    ))
            }
            {user ? <ProfileImage /> : <Button onClick={startAuthing} label='login' />}
        </StyledLandingLinks>
    );
};

const chooseHref = (path) => {
    switch (path) {
        default:
            return [
                {
                    url: '/devotions',
                    label: 'devotions'
                },
                {
                    url: '/stories',
                    label: 'stories'
                },
                {
                    url: '/poetry',
                    label: 'poetry'
                }
            ];
    };
};

export default LandingLinks;
