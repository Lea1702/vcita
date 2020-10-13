export function getBusinesses (page = 1, per_page=10, sort_by="created_at", sort_order= "desc") {
    return{
        type: "GET_BUSINESSES",
        page: page, per_page: per_page, sort_by: sort_by, sort_order: sort_order
    }
}

export function onDelete (business_id) {
    return{
        type: "DELETE_BUSINESS",
        business_id: business_id
    }
}

export function onCreate (business) {
    return{
        type: "CREATE_BUSINESS",
        business: business
    }
}
