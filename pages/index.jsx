import { useEffect } from 'react';
import { useGlobalState } from '../lib/state';

import LandingTemplate from '../ui/templates/LandingTemplate';

const Index = () => {
  const { checkAuthState } = useGlobalState();

  useEffect(checkAuthState, []);

  return <LandingTemplate />;
};

export default Index;
