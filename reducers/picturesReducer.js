const initialState = {
    pictures: [],
    fetching: false,
    successfully: false,
    error: null
};

export default function picturesReducer(state = initialState, action) {
    switch (action.type) {
        case 'PICTURES_REQUEST_START':
            return {
                ...state,
                fetching: true
            };
        case 'PICTURES_REQUEST_SUCCESS':
            return {
                ...state,
                fetching: false,
                pictures: action.pictures,
                successfully: true,
                error: null
            };
        case 'PICTURES_REQUEST_FAILURE':
            return {
                ...state,
                fetching: false,
                successfully: false,
                error: action.error
            };
        default:
            return state;
    }
}