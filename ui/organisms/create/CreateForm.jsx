import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useGlobalState } from '../../../lib/state';

import FormField from '../../molecules/shared/FormField';

const StyledCreateForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.componentBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.componentBorderRadius};
    padding: 20px 30px;
    margin-top: 25px;
`;

const CreateForm = () => {
    const [formData, setFormData] = useState({});
    const router = useRouter();
    const CURR_FIELDS = FIELDS[router.query.type];

    useEffect(() => {
        const fields = [];
    }, []);

    return (
        <StyledCreateForm>
            {CURR_FIELDS.map((f) => {
                const name = f.type;
                const key = f.key;

                return (
                    <FormField
                        key={key}
                        label={f.label}
                        type={name}
                        value={formData[key]}
                        setValue={(value) => {
                            const newState = formData;
                            newState[key] = value;
                            setFormData({ ...newState });
                        }}
                    />
                )
            })}
        </StyledCreateForm>
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
}

export default CreateForm;
