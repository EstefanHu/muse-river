const authReducer = (state, { type, payload }) => {
    switch (type) {
        case 'ADD_ERROR':
            return {
                ...state,
                authErrorMessage: payload
            };

        case 'CLEAR_ERROR':
            return {
                ...state,
                authErrorMessage: ''
            };

        case 'START_AUTHING':
            return {
                ...state,
                isAuthing: true
            };

        case 'END_AUTHING':
            return {
                ...state,
                isAuthing: false,
                authErrorMessage: ''
            };

        case 'SET_USER':
            return {
                ...state,
                authErrorMessage: '',
                user: payload,
            };

        case 'CLEAR_USER':
            return {
                ...state,
                user: null
            };

        default:
            return state;
    };
};

export default authReducer;
