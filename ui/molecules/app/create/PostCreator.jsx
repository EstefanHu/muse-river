import { useEffect } from 'react';
import { useRouter } from 'next/router';

import CreateFormField from './CreateFormField';
import CreateNextStep from '../../../atoms/app/create/CreateNextStep';
import Loading from '../../../atoms/shared/Loading';

const PostCreator = ({ postData, setPostData }) => {
    const router = useRouter();
    const { type } = router.query;

    useEffect(() => {
        const data = {};
        FIELDS[type].forEach(({ key }) => data[key] = '');
        setPostData(data);
    }, [type, setPostData]);

    if (!postData) return <Loading />;

    return (
        <>
            {FIELDS[type].map(({ key, label, type }) => (
                <CreateFormField
                    key={key}
                    label={label}
                    type={type}
                    value={postData[key]}
                    setValue={(value) => {
                        const newState = postData;
                        newState[key] = value;
                        setPostData({ ...newState });
                    }}
                />
            ))}
            <CreateNextStep
                text='create post'
            />
        </>
    )
};

const FIELDS = {
    devotion: [
        {
            key: 'title',
            label: 'title',
            type: 'text'
        },
        {
            key: 'body',
            label: 'body',
            type: 'textarea'
        }
    ],
    poem: [
        {
            key: 'title',
            label: 'title',
            type: 'text'
        },
        {
            key: 'body',
            label: 'body',
            type: 'textarea'
        }
    ]
};

export default PostCreator;
