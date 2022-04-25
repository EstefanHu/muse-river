import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { db } from '../../../../lib/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const StyledPostReview = styled.form`

`;

const PostReview = () => {
    const router = useRouter();
    const { step } = router.query;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const postRef = await addDoc(collection(db, 'test'), formData);
            console.log(postRef);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <StyledPostReview onSubmit={handleSubmit}>

        </StyledPostReview>
    )
};

export default PostReview;
