const initialState =
    {
        businesses: [],
        businessesPending: true,
        createPending: false,
        total: 0
    };

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case "GET_BUSINESSES_SUCCEED":
            return {...state, businesses : action.businesses, total: action.total, businessesPending: false};
        case "CREATE_BUSINESS":
            return {...state, businessesPending: true, createPending: true};
        case "CREATE_BUSINESS_SUCCEED":
            return {...state, createPending: false};
        case "CREATE_BUSINESS_FAILED":
            return {...state, createPending: false};
        case "GET_BUSINESSES":
            return {...state, businessesPending: true};
        default:
            return state;
    }
}