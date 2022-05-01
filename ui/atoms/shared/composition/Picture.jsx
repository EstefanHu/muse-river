import styled from 'styled-components';

const StyledPicture = styled.img``;

const Picture = ({ id, url }) => {

    return <StyledPicture id={id} src={url} alt={id} />;
};

export default Picture;
