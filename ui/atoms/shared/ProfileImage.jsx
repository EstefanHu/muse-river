import React from 'react';
import Link from 'next/link';
import { useGlobalState } from '../../../lib/state';
import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

const StyledProfileImage = styled.div`
    border-radius: 50%;
    background-color: rgb(230, 230, 230);
    box-shadow: 2px 2px rgb(245, 245, 245);
    height: 40px;
    width: 40px;
    overflow: hidden;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const ProfileImage = () => {
    const { state: { auth: { isLoggedIn } } } = useGlobalState();

    return (
        <Link href="/app/profile" passHref>
            <a>
                <StyledProfileImage>
                    <FiUser size={25} />
                </StyledProfileImage>
            </a>
        </Link>
    )
};

export default ProfileImage;
