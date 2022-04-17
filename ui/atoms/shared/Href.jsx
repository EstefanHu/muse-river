import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHref = styled.a`
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin: 0 15px;
    transition: 0.3s;
    &:hover {
        color: ${props => props.theme.redPrimary};
    }
`;

const Href = ({ url, label }) => (
    <Link href={url} passHref>
        <StyledHref>
            {label}
        </StyledHref>
    </Link>
);

Href.propTypes = {
    /** Internal link */
    url: PropTypes.string.isRequired,
    /** Href text */
    label: PropTypes.string.isRequired
};

export default Href;
