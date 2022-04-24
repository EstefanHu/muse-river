import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import CreateFormField from '../../../molecules/app/create/CreateFormField';

const StyledPostCreator = styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.componentBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.componentBorderRadius};
    padding: 20px 30px;
    margin-top: 25px;
`;

const PostCreator = () => {
    const [formData, setFormData] = useState({});
    const router = useRouter();
    const { type } = router.query;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <StyledPostCreator onSubmit={handleSubmit}>
            {FIELDS[type].map(({ key, label, type }) => (
                <CreateFormField
                    key={key}
                    label={label}
                    type={type}
                    value={formData[key]}
                    setValue={(value) => {
                        const newState = formData;
                        newState[key] = value;
                        setFormData({ ...newState });
                    }}
                />
            ))}
            <input type="submit" value="sugmit" />
        </StyledPostCreator>
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
    ]
};

export default PostCreator;
