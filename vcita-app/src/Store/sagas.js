import { call, put, takeEvery } from 'redux-saga/effects'
import * as services from '../services/services'
import {toast} from "react-toastify";


function* getBusinesses (action) {
    try {
        const businesses = yield call(services.getBusinesses, action.page, action.per_page, action.sort_by, action.sort_order);
        yield put({type: "GET_BUSINESSES_SUCCEED", businesses: businesses});
    } catch (e) {
        toast("Error getting businesses");
    }
}


function* deleteBusiness (action) {
    try {
        yield call(services.deleteBusiness,  action.business_id);
        yield put({type: "GET_BUSINESSES"});
    } catch (e) {
    }
}

function* createBusiness (action) {
    try {
        yield call(services.createBusiness,  action.business);
        yield put({type: "GET_BUSINESSES"});
    } catch (e) {
    }
}

export function* mySaga() {
    yield takeEvery("GET_BUSINESSES", getBusinesses);
    yield takeEvery("DELETE_BUSINESS", deleteBusiness);
    yield takeEvery("CREATE_BUSINESS", createBusiness);

}



