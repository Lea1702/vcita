const initialState =
    {
        businesses: [],
        businessesPending: true
    };

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case "GET_BUSINESSES_SUCCEED":
            console.log("businesses : ", action.businesses);
            return {...state, businesses : action.businesses, businessesPending: false};
        default:
            return state;
    }
}