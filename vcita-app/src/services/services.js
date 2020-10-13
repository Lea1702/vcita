import React from "react";
import axios from "axios";
import {token} from "../config"

console.log("token : ", token);

export const getBusinesses = async (page, per_page, sort_by, sort_order) => {
    try {
        let url = `https://api2.meet2know.com/operator_api/v1/businesses/get_businesses?page=${page.toString()}&per_page=${per_page.toString()}&sort_by=${sort_by}&sort_order=${sort_order}`;
        let res = await axios.get(url, { headers:  { 'Authorization': token  }});
        console.log("res.data.data.businesses : ", res.data.data.businesses);
        return res.data.data.businesses;
    }
    catch (err) {
        throw err;
    }
};

export const deleteBusiness = async (business_id) => {
    try {
        let res = await axios.post(`https://api2.meet2know.com/operator_api/v1/businesses/remove_businesses?business_uids[0]=${business_id}`, null,
            { headers:  { 'Authorization': token  }});
        return res;
    }
    catch (err) {
        throw err;
    }
};

export const createBusiness = async (body) => {
    try {
        let res = await axios.post(`https://api2.meet2know.com/operator_api/v1/businesses/create_business`, body,
            { headers:  { 'Authorization': token  }});
        return res;
    }
    catch (err) {
        throw err;
    }
};

