import Header from '../../molecules/layout/Header';
import LandingLinks from '../../molecules/landing/LandingLinks';
import AuthModal from './AuthModal';

const LandingHeader = () => {

    return (
        <Header>
            <LandingLinks />
            <AuthModal />
        </Header>
    )
};

export default LandingHeader;
