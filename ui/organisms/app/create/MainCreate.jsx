import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../../lib/firebaseConfig';

import PostCreator from '../../../molecules/app/create/PostCreator';
import Post from '../../../molecules/layout/Post';
import Loading from '../../../atoms/shared/Loading';

const StyledMainCreate = styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.componentBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.componentBorderRadius};
    padding: 20px 30px;
    margin-top: 25px;
`;

const MainCreate = () => {
    const [postData, setPostData] = useState(null);
    const router = useRouter();
    const { type, step } = router.query;

    const renderStep = (step) => {
        switch (step) {
            case 'create':
                return <PostCreator
                    postData={postData}
                    setPostData={setPostData}
                />;
            case 'review':
                return <Post components={postData} />;
            default:
                return;
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        switch (step) {
            case 'create':
                console.log(postData);
                return router.push(`/app/create?type=${type}&step=review`, undefined, { shallow: true });
            case 'review':
                const postRef = await addDoc(collection(db, 'test'), postData);
                console.log(postRef);
                return router.push(`/app/create?type=${type}&step=confirm`, undefined, { shallow: true });
            default:
                return;
        }
    };

    if (!step) return <Loading />;

    return (
        <StyledMainCreate onSubmit={handleSubmit}>
            {renderStep(step)}
        </StyledMainCreate>
    )
};

export default MainCreate;
