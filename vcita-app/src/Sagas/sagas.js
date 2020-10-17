import { call, put, takeEvery } from 'redux-saga/effects'
import * as services from '../services/services'
import {toast} from "react-toastify";
import * as actionCreator from "../Store/actions"

function* getBusinesses (action) {
    try {
        const businesses = yield call(services.getBusinesses, action.sort_by, action.sort_order, action.page, action.per_page);
        yield put({type: "GET_BUSINESSES_SUCCEED", businesses: businesses.businesses, total: businesses.total});
    } catch (e) {
        toast.error("Error getting businesses");
    }
}

function* deleteBusiness (action) {
    try {
        yield call(services.deleteBusiness, action.business_id);
        yield put(actionCreator.getBusinesses());
        toast.success("Business deleted");
    } catch (e) {
        toast.error("Error : e.message");
    }
}

function* createBusiness (action) {
    try {
        yield call(services.createBusiness,  action.business);
        yield put({type: "CREATE_BUSINESS_SUCCEED"});
        toast.success("Business created !");
        setTimeout(null, 3000);
        //takes time to get updated
        yield put(actionCreator.getBusinesses());
    } catch (e) {
        yield put({type: "CREATE_BUSINESS_FAILED"});
        Object.values(e.response.data.data).forEach((value) =>{
            toast.error(value[0]);
        } );
    }
}

export function* mySaga() {
    yield takeEvery("GET_BUSINESSES", getBusinesses);
    yield takeEvery("DELETE_BUSINESS", deleteBusiness);
    yield takeEvery("CREATE_BUSINESS", createBusiness);
}