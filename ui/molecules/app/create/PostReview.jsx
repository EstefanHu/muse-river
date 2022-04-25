import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { db } from '../../../../lib/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

import Post from '../../layout/Post';

const StyledPostReview = styled.form`

`;

const PostReview = ({ postData }) => {
    const router = useRouter();
    const { step } = router.query;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const postRef = await addDoc(collection(db, 'test'), postData);
            console.log(postRef);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <StyledPostReview onSubmit={handleSubmit}>
            <Post components={postData} />
        </StyledPostReview>
    )
};

export default PostReview;
