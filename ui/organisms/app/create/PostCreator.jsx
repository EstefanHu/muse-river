import { useState } from 'react';
import { useRouter } from 'next/router';

import CreateForm from '../../../atoms/app/create/CreateForm';
import CreateFormField from '../../../molecules/app/create/CreateFormField';
import FormDevotion from './FormDevotion';
import FormPoem from './FormPoem';
import FormStory from './FormStory';

const PostCreator = () => {
    const [formData, setFormData] = useState({});
    const router = useRouter();
    const { type } = router.query;

    // const renderForm = (type) => {
    //     switch (type) {
    //         case 'devotion':
    //             return <FormDevotion />;
    //         case 'poem':
    //             return <FormPoem />;
    //         case 'story':
    //             return <FormStory />;
    //     }
    // };

    // return renderForm(type);

    return (
        <CreateForm>
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
        </CreateForm>
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
