const formatReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_LINKS':
            return {
                ...state,
                links: payload
            };

        default:
            return state;
    };
};

export default formatReducer;
