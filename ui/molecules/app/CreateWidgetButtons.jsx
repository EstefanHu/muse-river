import styled from 'styled-components';
import { FaPray, FaPenFancy } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';

import CreateButton from '../../atoms/app/write/CreateButtion';

const CreateButtons = [{
    label: 'Devotion',
    icon: <FaPray />
}, {
    label: 'Poem',
    icon: <FaPenFancy />
}, {
    label: 'Story',
    icon: <GiBookCover />
}];

const StyledCreateWidgetButtons = styled.span`
    display: flex;
    justify-content: space-between;
`;

const CreateWidgetButtons = () => (
    <StyledCreateWidgetButtons>
        {CreateButtons.map(({ label, icon }) => (
            <CreateButton
                key={label}
                onClick={() => {
                    window.open(`/app/write/${label.toLowerCase()}`);
                    window.opener = null;
                }}
                label={label}
                icon={icon}
            />
        ))}
    </StyledCreateWidgetButtons>
);

export default CreateWidgetButtons;
