import styled from 'styled-components';

import Title from '../../atoms/shared/composition/Title';
import Paragraph from '../../atoms/shared/composition/Paragraph';

const StyledPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Post = ({ components }) => {
    const renderComponent = (c) => {
        switch (c.type) {
            case 'title':
                return <Title
                    id={c.id}
                    text={c.body}
                />;
            case 'paragraph':
                return <Paragraph
                    id={c.id}
                    text={c.body}
                />;
            default:
                console.log(`failed to render ${c}`);
                return;
        }
    };

    return (
        <StyledPost>
            {components.map((c) => renderComponent(c))}
        </StyledPost>
    );
};

export default Post;
