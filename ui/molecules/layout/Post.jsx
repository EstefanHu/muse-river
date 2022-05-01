import styled from 'styled-components';

import Title from '../../atoms/shared/composition/Title';
import SectionHeader from '../../atoms/shared/composition/SectionHeader';
import Paragraph from '../../atoms/shared/composition/Paragraph';
import Picture from '../../atoms/shared/composition/Picture';

const StyledPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme }) => theme.componentBackground};
`;

const Post = ({ title, composition }) => {
    const renderComponent = (c) => {
        switch (c.type) {
            case 'title':
                return <Title
                    key={c.id}
                    id={c.id}
                    text={c.body}
                />;
            case 'sectionHeader':
                return <SectionHeader
                    key={c.id}
                    id={c.id}
                    text={c.body}
                />
            case 'paragraph':
                return <Paragraph
                    key={c.id}
                    id={c.id}
                    text={c.body}
                />;
            case 'image':
                return <Picture
                    key={c.id}
                    id={c.id}
                    url={c.url}
                />
            default:
                console.log(`failed to render ${c}`);
                return;
        }
    };
    return (
        <StyledPost>
            <Title text={title} />
            {
                composition
                    .sort((a, b) => Number(a.id) - Number(b.id))
                    .map((c) => renderComponent(c))
            }
        </StyledPost>
    );
};

export default Post;
