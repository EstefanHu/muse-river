import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import PostCreator from '../../../molecules/app/create/PostCreator';
import PostReview from '../../../molecules/app/create/PostReview';
import Loading from '../../../atoms/shared/Loading';

const StyledMainCreate = styled.div`
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
    const { step } = router.query;

    const renderStep = (step) => {
        switch (step) {
            case 'create':
                return <PostCreator
                    postData={postData}
                    setPostData={setPostData}
                />;
            case 'review':
                return <PostReview
                    postData={postData}
                    setPostData={setPostData}
                />;
            default:
                return;
        };
    };

    if (!step) return <Loading />;

    return (
        <StyledMainCreate>
            {renderStep(step)}
        </StyledMainCreate>
    )
};

export default MainCreate;
