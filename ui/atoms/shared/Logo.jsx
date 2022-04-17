import Link from 'next/link';
import styled from 'styled-components';

const StyledLogo = styled.a`
    font-weight: bold;
    font-size: 2vw;
    color: ${({ theme }) => theme.textColor};

    span {
        color: ${({ theme }) => theme.redPrimary};
        font-size: 0.85vw;
        text-transform: uppercase;
    }
`;

const Logo = () => <Link href='/' passHref><StyledLogo><span>the</span>River</StyledLogo></Link>;

export default Logo;
