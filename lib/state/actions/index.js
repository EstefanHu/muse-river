import * as authActions from './auth';
import * as formatActions from './format';

const mainActions = {
    ...authActions,
    ...formatActions
};

export default mainActions;
