import styled from 'styled-components';
import Paragraph from './Paragraph';

const StyledText = styled.div`

`;

const Text = ({ id, text }) => {

    return (
        <StyledText id={id}>
            {text
                .split(/\n/)
                .map((p, idx) => (
                    <Paragraph
                        key={idx}
                        id={null}
                        text={p}
                    />
                ))
            }
        </StyledText>
    )
};

export default Text;
