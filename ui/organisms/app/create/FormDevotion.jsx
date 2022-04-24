import { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useGlobalState } from '../../../../lib/state';

import CreateForm from '../../../atoms/app/create/CreateForm';

const StyledFormDevotion = styled.div``;

const FormDevotion = () => {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        passage: '',
        passageLocation: ''
    });

    return (
        <CreateForm>

        </CreateForm>
    )
};

const FIELDS = [
    {
        key: 'title',
        label: 'title',
        type: 'text'
    }
]

export default FormDevotion;
