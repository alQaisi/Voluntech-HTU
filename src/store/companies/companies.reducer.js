const INITIAL_STATE={
    companies:undefined,
    isError:false,
    typeFilter:"All types",
    searchFilter:""
}

export const CompaniesReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "SET_COMPANIES":
            return { ...state,companies:payload };
        case "SET_IS_ERROR_COMPANIES":
            return { ...state,isError:payload };
        case "SET_COMPANIES_TYPE":
            return { ...state, typeFilter:payload };
        case "SET_COMPANIES_SEARCH_TEXT":
            return { ...state,searchFilter:payload };
        case "RESET_COMPANIES":
            return INITIAL_STATE;
        default:
            return state;
    }
}